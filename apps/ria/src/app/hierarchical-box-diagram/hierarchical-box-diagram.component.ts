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
  selector: 'cvi-ng-hierarchical-box-diagram',
  templateUrl: './hierarchical-box-diagram.component.html',
  styleUrls: ['./hierarchical-box-diagram.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchicalBoxDiagramComponent
  implements AfterViewInit, OnDestroy
{
  private static readonly HORIZONTAL_PADDING = 16;
  private static readonly VERTICAL_PADDING = 8;

  @Input() boxes!: Box[];
  @ViewChild('measureDiv') measureDiv!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  private svg: any = null;

  private readonly MAX_BOX_WIDTH = 100;
  private readonly MAX_BOX_HEIGHT = 50;

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
    this.createSvg();
    this.calculateBoxDimensions();
    const { hierarchy, additionalLinks } = this.toHierarchy(this.boxes);
    if (hierarchy) {
      const nodeWidth = (d: BoxNode) => this.MAX_BOX_WIDTH + 50;
      const nodeHeight = (d: BoxNode) => this.MAX_BOX_HEIGHT;

      const treemap = d3
        .tree<BoxNode>()
        .nodeSize([nodeHeight(hierarchy), nodeWidth(hierarchy)])
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

      this.drawLines(combinedLinks);
      this.drawBoxes(nodes);
    }
  }

  private createSvg(): void {
    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;

    this.svg = d3
      .select(this.elementRef.nativeElement)
      .append('svg')
      .attr(
        'viewBox',
        `${-this.MAX_BOX_WIDTH} ${
          -containerHeight / 2
        } ${containerWidth} ${containerHeight}`
      )
      .attr('preserveAspectRatio', 'xMidYMid meet');
  }

  private drawLines(links: Array<HierarchyPointLink<BoxNode>>): void {
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

        // Calculate the midpoint of the source box
        const midXSource = sourceX;
        const midYSource = (sourceY + sourceY + d.source.height) / 2;

        // Calculate the midpoint of the target box
        const midXTarget = targetX;
        const midYTarget = (targetY + targetY + d.target.height) / 2;

        // Check the position of the target relative to the source
        if (sourceY < targetY) {
          // Target is below the source, bend the line downwards
          return `M ${sourceX} ${sourceY} L ${midXSource} ${midYSource} L ${midXSource} ${midYTarget} L ${midXTarget} ${midYTarget} L ${targetX} ${targetY}`;
        } else if (sourceY > targetY) {
          // Target is above the source, bend the line upwards
          return `M ${sourceX} ${sourceY} L ${midXSource} ${midYSource} L ${midXSource} ${midYTarget} L ${midXTarget} ${midYTarget} L ${targetX} ${targetY}`;
        } else {
          // Target is at the same vertical position as the source, draw a straight line
          return `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
        }
      })
      .attr('fill', 'none')
      .attr('stroke', '#D2D3D8')
      .attr('stroke-width', 2);
  }

  private drawBoxes(nodes: HierarchyPointNode<BoxNode>[]): void {
    const defaultWidth = 80;
    const defaultHeight = 50;
    const cornerRadius = 5;

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

    boxesSelection
      .append('a') // Wrap each box in an anchor element
      .attr(
        'xlink:href',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.href || 'javascript:void(0)'
      )
      .on('click', (d: HierarchyPointNode<BoxNode>) => {
        console.log('Box clicked:', d.data.data.href);
      })
      .append('rect')
      .attr(
        'x',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.width || defaultWidth) / 2
      )
      .attr(
        'y',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.height || defaultHeight) / 2
      )
      .attr(
        'width',
        (d: HierarchyPointNode<BoxNode>) => d.data.data.width || defaultWidth
      )
      .attr(
        'height',
        (d: HierarchyPointNode<BoxNode>) => d.data.data.height || defaultHeight
      )
      .attr('rx', cornerRadius)
      .attr('ry', cornerRadius)
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

    boxesSelection
      .append('foreignObject')
      .attr(
        'x',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.width || defaultWidth) / 2
      )
      .attr(
        'y',
        (d: HierarchyPointNode<BoxNode>) =>
          -(d.data.data.height || defaultHeight) / 2
      )
      .attr(
        'width',
        (d: HierarchyPointNode<BoxNode>) => d.data.data.width || defaultWidth
      )
      .attr(
        'height',
        (d: HierarchyPointNode<BoxNode>) => d.data.data.height || defaultHeight
      )
      .html(
        (d: HierarchyPointNode<BoxNode>) =>
          `<div class="box-content">${d.data.data.label}</div>`
      )
      .style('font-size', '14px')
      .style('line-height', '18px');
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
            return;
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
    const { HORIZONTAL_PADDING, VERTICAL_PADDING } =
      HierarchicalBoxDiagramComponent; // Replace with the actual class name
    const MAX_WIDTH = this.MAX_BOX_WIDTH;

    const measureDiv = this.measureDiv.nativeElement;

    // Apply styling to the measureDiv
    measureDiv.style.boxSizing = 'border-box';
    measureDiv.style.fontSize = '14px';
    measureDiv.style.lineHeight = '18px';
    measureDiv.style.fontFamily = 'Roboto, sans-serif'; // Fallback to sans-serif

    for (const box of this.boxes) {
      measureDiv.innerHTML = box.label;

      const rect = measureDiv.getBoundingClientRect();
      let width = rect.width;
      const initialHeight = rect.height;

      const renderedText = measureDiv.innerText || measureDiv.textContent;
      const isSingleWordAndOverflows =
        !/\s/.test(renderedText) && width > MAX_WIDTH;

      if (isSingleWordAndOverflows) {
        box.width = width;
        box.height = initialHeight + VERTICAL_PADDING;
      } else if (width > MAX_WIDTH) {
        const overflowRatio = width / MAX_WIDTH;
        width = MAX_WIDTH;
        box.width = MAX_WIDTH + HORIZONTAL_PADDING;
        box.height = initialHeight * overflowRatio + VERTICAL_PADDING;
      } else {
        box.width = width + HORIZONTAL_PADDING;
        box.height = initialHeight + VERTICAL_PADDING;
      }

      // Reset innerHTML and styles after each box measurement
      measureDiv.innerHTML = '';
      measureDiv.removeAttribute('style');
    }
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
