import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { HierarchyPointLink, HierarchyPointNode } from 'd3';
import { Box } from './box';
import { BoxNode } from './box-node';

@Component({
  selector: 'cvi-ng-process-diagram',
  templateUrl: './process-graph.component.html',
  styleUrls: ['./process-graph.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessGraphComponent implements AfterViewInit, OnDestroy {
  @Input() boxes!: Box[];
  @ViewChild('measureDiv') measureDiv!: ElementRef;

  private svg: any = null;

  private readonly MAX_BOX_WIDTH = 100;
  private readonly DEFAULT_BOX_WIDTH = 80;
  private readonly DEFAULT_BOX_HEIGHT = 50;
  private readonly ROUNDED_CORNER_RADIUS = 5;
  private readonly MARGIN = { top: 0, right: 0, bottom: 0, left: 0 };
  private readonly WIDTH = 800 - this.MARGIN.left - this.MARGIN.right;
  private readonly HEIGHT = 400 - this.MARGIN.top - this.MARGIN.bottom;
  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => this.createGraph());
  }

  ngOnDestroy() {
    if (this.svg) {
      this.svg.remove();
    }
  }

  private createGraph() {
    this.calculateBoxDimensions();
    this.createSvg();
    this.generateLayout();
  }

  private createSvg(): void {
    this.svg = d3
      .select(this.elementRef.nativeElement)
      .append('svg')
      .attr('viewBox', `0 0 ${this.WIDTH} ${this.HEIGHT}`)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.MARGIN.left + ',' + this.MARGIN.top + ')'
      )
      .attr('preserveAspectRatio', 'xMidYMid meet');
  }

  private generateLayout() {
    const { hierarchy, additionalLinks } = this.toHierarchy(this.boxes);
    if (!hierarchy) {
      return;
    }

    const treemap = d3
      .tree<BoxNode>()
      .size([this.HEIGHT, this.WIDTH - this.MAX_BOX_WIDTH])
      .separation((a, b) => {
        return a.parent == b.parent ? 1 : 2;
      });

    const root = d3.hierarchy(hierarchy);
    const tree = treemap(root);
    const nodes: HierarchyPointNode<BoxNode>[] = tree.descendants();
    const links: Array<HierarchyPointLink<BoxNode>> = tree.links();

    const additionalMappedLinks: Array<HierarchyPointLink<BoxNode>> =
      additionalLinks.map((link) => {
        return {
          source: nodes.find((node) => node.data.data.id === link.source),
          target: nodes.find((node) => node.data.data.id === link.target),
        } as HierarchyPointLink<BoxNode>;
      });

    const combinedLinks: Array<HierarchyPointLink<BoxNode>> = links.concat(
      additionalMappedLinks
    );

    // Logic to align nodes in the same layer to the leftmost edge
    const depthYMap: { [depth: number]: number } = {};
    nodes.forEach((node) => {
      if (
        depthYMap[node.depth] === undefined ||
        depthYMap[node.depth] > node.y
      ) {
        depthYMap[node.depth] = node.y;
      }
    });
    nodes.forEach((node) => {
      node.y = depthYMap[node.depth];
    });

    this.drawBoxes(nodes, combinedLinks);
  }

  toHierarchy(boxes: Box[]): {
    hierarchy: BoxNode;
    additionalLinks: { source: string; target: string }[];
  } {
    const nodeMap: { [key: string]: BoxNode } = {};
    const additionalLinks: { source: string; target: string }[] = [];

    // Create nodes for all boxes without linking children
    boxes.forEach((box) => {
      nodeMap[box.id] = { data: box };
    });

    // Start processing from the root box using BFS
    const rootNode = nodeMap['1'];
    const queue: BoxNode[] = [rootNode];

    while (queue.length) {
      const currentNode = queue.shift();

      if (currentNode?.data.targets) {
        currentNode.children = [];

        currentNode.data.targets.forEach((targetId) => {
          if (!nodeMap[targetId]) {
            throw new Error(`Target box with id ${targetId} not found.`);
          }

          const childNode = nodeMap[targetId];

          if (childNode.parent) {
            // This child already has a parent (so it was processed before).
            // Add the relationship to additionalLinks instead of linking in the tree.
            const link = {
              source: currentNode.data.id,
              target: childNode.data.id,
            };

            const linkExists = (source: string, target: string) => {
              return additionalLinks.find(
                (l) =>
                  (l.source === source && l.target === target) ||
                  (l.source === target && l.target === source)
              );
            };

            if (!linkExists(currentNode.data.id, childNode.data.id)) {
              additionalLinks.push(link);
            }
          } else {
            // Link the child to the current node and enqueue for BFS.
            childNode.parent = currentNode;
            currentNode.children?.push(childNode);
            queue.push(childNode);
          }
        });
      }
    }

    return {
      hierarchy: rootNode,
      additionalLinks,
    };
  }

  private calculateBoxDimensions(): void {
    const horizontalPadding = 16; // Padding for left & right
    const verticalPadding = 8; // Padding for top & bottom
    const MAX_WIDTH = this.MAX_BOX_WIDTH; // Adjust to your needs

    for (const box of this.boxes) {
      this.measureDiv.nativeElement.innerHTML = box.label; // Insert the HTML content into the hidden div

      // Extract text from the rendered HTML
      const renderedText =
        this.measureDiv.nativeElement.innerText ||
        this.measureDiv.nativeElement.textContent;

      let width = this.measureDiv.nativeElement.offsetWidth; // Measure width
      const initialHeight = this.measureDiv.nativeElement.offsetHeight; // Measure initial height

      // Check if the rendered content is a single word without whitespace and overflows
      const isSingleWordAndOverflows =
        !/\s/.test(renderedText) && width > MAX_WIDTH;

      if (isSingleWordAndOverflows) {
        // If it's a single word that overflows, adjust the width only
        box.width = width + horizontalPadding;
        box.height = initialHeight + verticalPadding;
      } else if (width <= MAX_WIDTH) {
        // For other boxes, if they don't exceed the max width, set height with added vertical padding
        box.height = initialHeight + verticalPadding;
      } else {
        // For boxes that exceed the max width but are not single words
        const overflowRatio = width / MAX_WIDTH;
        width = MAX_WIDTH;
        box.height = initialHeight * overflowRatio + verticalPadding;
        box.width = MAX_WIDTH + horizontalPadding;
      }

      this.measureDiv.nativeElement.innerHTML = ''; // Clear the temporary div after each iteration
    }
  }

  private drawBoxes(
    nodes: HierarchyPointNode<BoxNode>[],
    links: Array<HierarchyPointLink<BoxNode>>
  ): void {
    this.svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d: HierarchyPointLink<BoxNode>) => {
        const sourceX = d.source.y;
        const sourceY = d.source.x;
        const targetX = d.target.y;
        const targetY = d.target.x;
        const middleX = (sourceX + targetX) / 2;

        return `M ${sourceX} ${sourceY} L ${middleX} ${sourceY} L ${middleX} ${targetY} L ${targetX} ${targetY}`;
      })
      .attr('fill', 'none')
      .attr('stroke', '#D2D3D8')
      .attr('stroke-width', 2);

    const boxesSelection = this.svg
      .selectAll('.box')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'box')
      .attr(
        'transform',
        (d: HierarchyPointNode<BoxNode>) => `translate(${d.y},${d.x})`
      );

    const boxesWithHref = boxesSelection.filter(
      (d: HierarchyPointNode<BoxNode>) => d.data.data.href
    );

    const hrefBoxes = boxesWithHref
      .append('a')
      .attr('xlink:href', (d: HierarchyPointNode<BoxNode>) => d.data.data.href);

    // Attach the rectangles either to the 'a' tags or the main 'g' tags
    const rectParent = hrefBoxes.nodes().length ? hrefBoxes : boxesSelection;

    rectParent
      .append('rect')
      .attr(
        'x',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.width || this.DEFAULT_BOX_WIDTH) / 2
      )
      .attr(
        'y',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.height || this.DEFAULT_BOX_HEIGHT) / 2
      )
      .attr(
        'width',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.width || this.DEFAULT_BOX_WIDTH
      )
      .attr(
        'height',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.height || this.DEFAULT_BOX_HEIGHT
      )
      .attr('rx', this.ROUNDED_CORNER_RADIUS)
      .attr('ry', this.ROUNDED_CORNER_RADIUS)
      .attr('fill', (d: HierarchyPointNode<BoxNode>) => d.data.data.color)
      .attr('stroke', (d: HierarchyPointNode<BoxNode>) => {
        if (
          d.data.data.borderStyle === 'dotted' ||
          d.data.data.borderStyle === 'solid'
        ) {
          return d.data.data.borderColor || this.darkenColor(d.data.data.color);
        }
        return 'none';
      })
      .attr('stroke-dasharray', (d: HierarchyPointNode<BoxNode>) => {
        if (d.data.data.borderStyle === 'dotted') {
          return '4,5';
        }
        return '';
      })
      .attr('stroke-width', 2);

    // Attach the foreignObject to either the 'a' tags or the main 'g' tags
    const foreignObjectParent = hrefBoxes.nodes().length
      ? hrefBoxes
      : boxesSelection;

    foreignObjectParent
      .append('foreignObject')
      .attr(
        'x',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.width || this.DEFAULT_BOX_WIDTH) / 2
      )
      .attr(
        'y',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.height || this.DEFAULT_BOX_HEIGHT) / 2
      )
      .attr(
        'width',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.width || this.DEFAULT_BOX_WIDTH
      )
      .attr(
        'height',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.height || this.DEFAULT_BOX_HEIGHT
      )
      .html(
        (d: HierarchyPointNode<BoxNode>) =>
          `<div class="box-content">${d.data.data.label}</div>`
      )
      .style('font-size', '14px')
      .style('line-height', '18px');
  }

  private darkenColor(color: string, percent = -40): string {
    const num = parseInt(color.slice(1), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return (
      '#' +
      ((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1).toUpperCase()
    );
  }
}
