import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { HierarchyNode, HierarchyPointLink, HierarchyPointNode } from 'd3';
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
    this.removeSvg();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateGraphOnResize();
  }

  private updateGraphOnResize(): void {
    this.removeSvg();
    this.createGraph();
  }

  private createGraph() {
    this.createSvg();
    this.calculateBoxDimensions();
    const { rootNode, additionalLinks } = this.toHierarchy(this.boxes);
    if (!rootNode) {
      return;
    }

    const root = d3.hierarchy(rootNode);
    const isGraphOverflow = this.isGraphOverflow(root);

    let layout;
    if (isGraphOverflow) {
      // Use the top-to-bottom layout
      layout = d3
        .tree<BoxNode>()
        .nodeSize([this.MAX_BOX_WIDTH + this.MAX_BOX_WIDTH / 2, 0])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2));

      // Center the root node at the top middle
      root.data.data.x = this.MAX_BOX_HEIGHT / 2;
      root.data.data.y = 0;
    } else {
      // Use the left-to-right layout
      layout = d3
        .tree<BoxNode>()
        .nodeSize([
          this.MAX_BOX_HEIGHT,
          this.MAX_BOX_WIDTH + this.MAX_BOX_WIDTH / 2,
        ])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2));
    }

    const hierarchy = layout(root);
    const nodes: HierarchyPointNode<BoxNode>[] = hierarchy.descendants();
    const links: Array<HierarchyPointLink<BoxNode>> = hierarchy.links();

    const additionalMappedLinks: Array<HierarchyPointLink<BoxNode>> =
      additionalLinks.map((link) => this.mapLinkToNodes(link, nodes));

    const combinedLinks: Array<HierarchyPointLink<BoxNode>> = links.concat(
      additionalMappedLinks
    );

    this.drawLines(combinedLinks);
    this.drawBoxes(nodes);
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
      );
  }

  private drawLines(links: Array<HierarchyPointLink<BoxNode>>): void {
    this.svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', this.calculateLinkPath)
      .attr('fill', 'none')
      .attr('stroke', '#D2D3D8')
      .attr('stroke-width', 2);
  }

  private calculateLinkPath(d: HierarchyPointLink<BoxNode>): string {
    const sourceX = d.source.y;
    const sourceY = d.source.x;
    const targetX = d.target.y;
    const targetY = d.target.x;

    const midXSource = sourceX;
    const midYSource = (sourceY + sourceY + d.source.height) / 2;

    const midXTarget = targetX;
    const midYTarget = (targetY + targetY + d.target.height) / 2;

    if (sourceY < targetY) {
      return `M ${sourceX} ${sourceY} L ${midXSource} ${midYSource} L ${midXSource} ${midYTarget} L ${midXTarget} ${midYTarget} L ${targetX} ${targetY}`;
    } else if (sourceY > targetY) {
      return `M ${sourceX} ${sourceY} L ${midXSource} ${midYSource} L ${midXSource} ${midYTarget} L ${midXTarget} ${midYTarget} L ${targetX} ${targetY}`;
    } else {
      return `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`;
    }
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

    const boxAnchor = boxesSelection
      .append('a')
      .attr(
        'xlink:href',
        (d: HierarchyPointNode<BoxNode>) =>
          d.data.data.href || 'javascript:void(0)'
      )
      .on('click', (d: HierarchyPointNode<BoxNode>) => {
        console.log('Box clicked:', d.data.data.href);
      });

    boxAnchor
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

    boxAnchor
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
    rootNode: BoxNode;
    additionalLinks: { source: string; target: string }[];
  } {
    const nodeMap: { [key: string]: BoxNode } = {};
    const additionalLinks: { source: string; target: string }[] = [];

    boxes.forEach((box) => (nodeMap[box.id] = { data: box }));

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
            const link = {
              source: currentNode.data.id,
              target: childNode.data.id,
            };
            if (!this.linkExists(additionalLinks, link)) {
              additionalLinks.push(link);
            }
          } else {
            childNode.parent = currentNode;
            currentNode.children?.push(childNode);
            queue.push(childNode);
          }
        });
      }
    }

    return { rootNode, additionalLinks };
  }

  private linkExists(
    links: { source: string; target: string }[],
    link: { source: string; target: string }
  ): boolean {
    return links.some(
      (l) =>
        (l.source === link.source && l.target === link.target) ||
        (l.source === link.target && l.target === link.source)
    );
  }

  private calculateBoxDimensions(): void {
    const { HORIZONTAL_PADDING, VERTICAL_PADDING } =
      HierarchicalBoxDiagramComponent;
    const MAX_WIDTH = this.MAX_BOX_WIDTH;
    const measureDiv = this.measureDiv.nativeElement;
    measureDiv.style.boxSizing = 'border-box';
    measureDiv.style.fontSize = '14px';
    measureDiv.style.lineHeight = '18px';
    measureDiv.style.fontFamily = 'Roboto, sans-serif';

    this.boxes.forEach((box) => {
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

      measureDiv.innerHTML = '';
      measureDiv.removeAttribute('style');
    });
  }

  private darkenColor(color: string, percent = -40): string {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    return (
      '#' +
      ((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1).toUpperCase()
    );
  }

  private removeSvg() {
    if (this.svg) {
      this.svg.remove();
    }
  }

  private isGraphOverflow(root: HierarchyNode<BoxNode>): boolean {
    const nodeSpacingX = 55;
    const nodeSpacingY = 30;

    // Calculate the total width and height including the spacing between nodes
    const totalWidth = (root.height + 1) * (this.MAX_BOX_WIDTH + nodeSpacingX);
    const totalHeight =
      root.leaves().length * (this.MAX_BOX_HEIGHT + nodeSpacingY);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    return totalWidth > screenWidth || totalHeight > screenHeight;
  }

  private mapLinkToNodes(
    link: { source: string; target: string },
    nodes: HierarchyPointNode<BoxNode>[]
  ): HierarchyPointLink<BoxNode> {
    return {
      source: nodes.find((node) => node.data.data.id === link.source),
      target: nodes.find((node) => node.data.data.id === link.target),
    } as HierarchyPointLink<BoxNode>;
  }
}
