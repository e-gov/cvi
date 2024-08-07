import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { HierarchyPointLink, HierarchyPointNode, tree } from 'd3';
import { Box } from './box';
import { BoxNode } from './box-node';
import { HierarchyResult } from './hierarchy-result';

@Component({
  selector: 'cvi-ng-hierarchical-box-diagram',
  templateUrl: './hierarchical-box-diagram.component.html',
  styleUrls: ['./hierarchical-box-diagram.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchicalBoxDiagramComponent implements OnDestroy, OnChanges {
  private static readonly PADDING = {
    HORIZONTAL: 16,
    VERTICAL: 8,
  };
  private static readonly BOX_PARAMS = {
    MAX_BOX_WIDTH: 100,
    MAX_BOX_HEIGHT: 50,
    LINE_HEIGHT: '18px',
    FONT_SIZE: '14px',
    FONT_FAMILY: 'Roboto, sans-serif',
  };

  @ViewChild('measureDiv', { static: true }) measureDiv!: ElementRef;
  @ViewChild('container', { static: true }) container!: ElementRef;

  @Input() boxes!: Box[];
  @Input() ariaLabel = 'Hierarchical box diagram';

  private svg: any = null;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly ngZone: NgZone,
    private readonly cdRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['boxes']?.currentValue) {
      this.createDiagram();
    }
  }

  ngOnDestroy() {
    this.removeSvg();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.createDiagram();
  }

  private createDiagram(): void {
    this.ngZone.runOutsideAngular(() => {
      this.setupDiagram();
      this.cdRef.markForCheck();
    });
  }

  private setupDiagram() {
    this.removeSvg();
    this.createSvg();
    this.calculateBoxDimensions();
    this.drawGraph();
  }

  private drawGraph() {
    const { rootNode, additionalLinks } = this.toHierarchy(this.boxes);
    if (!rootNode) {
      return;
    }

    const root = d3.hierarchy(rootNode);
    const containerWidth = this.container.nativeElement.clientWidth;
    const containerHeight = this.container.nativeElement.clientHeight;
    const { BOX_PARAMS } = HierarchicalBoxDiagramComponent;
    const rootWidth = 1.5 * BOX_PARAMS.MAX_BOX_WIDTH;
    const layout = tree<BoxNode>()
      .size([containerHeight, containerWidth - rootWidth])
      .separation((a, b) => this.calculateSeparation(a, b));

    const hierarchy = layout(root);
    const nodes: HierarchyPointNode<BoxNode>[] = hierarchy.descendants();

    // Adjust overlapping boxes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        while (this.boxesOverlap(nodes[i], nodes[j])) {
          const centerVertical = this.container.nativeElement.clientHeight / 2;
          if (nodes[j].x < centerVertical) {
            nodes[j].x -= BOX_PARAMS.MAX_BOX_HEIGHT / 2;
          } else {
            nodes[j].x += BOX_PARAMS.MAX_BOX_HEIGHT / 2;
          }
        }
      }
    }

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
    const { BOX_PARAMS } = HierarchicalBoxDiagramComponent;
    const viewBoxX = -BOX_PARAMS.MAX_BOX_WIDTH / 1.5;
    const viewBoxY = 0;

    this.svg = d3
      .select(this.container.nativeElement)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr(
        'viewBox',
        `${viewBoxX} ${viewBoxY} ${containerWidth} ${containerHeight}`
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
    const defaultWidth = 100;
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

    const boxAnchor = boxesSelection.append('a').each(function (
      this: SVGAElement,
      d: HierarchyPointNode<BoxNode>
    ) {
      const href = d.data.data.href;
      if (href) {
        d3.select(this).attr('href', href);
      }
    });

    // Title for Screen Readers
    boxAnchor
      .append('title')
      .text(
        (d: HierarchyPointNode<BoxNode>) =>
          `Diagram box for ${d.data.data.label}`
      );

    // Making SVG elements focusable
    boxAnchor.attr('tabindex', '0');

    const idToLabelLookup = nodes.reduce(
      (acc, boxNode) => {
        acc[boxNode.data.data.id] = boxNode.data.data.label;
        return acc;
      },
      {} as Record<string, string>
    );

    // Description to understand the box and its links
    boxAnchor.append('desc').text((d: HierarchyPointNode<BoxNode>) => {
      let description = `Box labeled ${d.data.data.label}.`;

      // Describe the parent relationship
      if (d.parent) {
        description += ` This box is a child of ${d.parent.data.data.label}.`;
      }

      // Describe the targets relationship
      if (d.data.data.targets && d.data.data.targets.length > 0) {
        const targetLabels = d.data.data.targets.map(
          (targetId) => idToLabelLookup[targetId] || targetId
        );
        description += ` This box links to boxes labeled: ${targetLabels.join(
          ', '
        )}.`;
      }

      return description;
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
      .attr('fill', (d: HierarchyPointNode<BoxNode>) => {
        return d.data.data.color;
      })
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

    const { BOX_PARAMS } = HierarchicalBoxDiagramComponent;
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
      .style('font-size', BOX_PARAMS.FONT_SIZE)
      .style('line-height', BOX_PARAMS.LINE_HEIGHT);
  }

  private toHierarchy(boxes: Box[]): HierarchyResult {
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
    const { PADDING, BOX_PARAMS } = HierarchicalBoxDiagramComponent;
    const MAX_WIDTH = BOX_PARAMS.MAX_BOX_WIDTH;
    const measureDiv = this.measureDiv?.nativeElement;
    measureDiv.style.boxSizing = 'border-box';
    measureDiv.style.fontSize = BOX_PARAMS.FONT_SIZE;
    measureDiv.style.lineHeight = BOX_PARAMS.LINE_HEIGHT;
    measureDiv.style.fontFamily = BOX_PARAMS.FONT_FAMILY;

    this.boxes.forEach((box) => {
      measureDiv.innerHTML = box.label;
      const rect = measureDiv.getBoundingClientRect();
      const width = rect.width;
      const initialHeight = rect.height;
      const renderedText = measureDiv.innerText || measureDiv.textContent;
      const isSingleWordAndOverflows =
        !/\s/.test(renderedText) && width > MAX_WIDTH;

      if (isSingleWordAndOverflows) {
        box.width = width;
        box.height = initialHeight + PADDING.VERTICAL;
      } else if (width > MAX_WIDTH) {
        const overflowRatio = width / MAX_WIDTH;
        box.width = MAX_WIDTH + PADDING.HORIZONTAL;
        box.height = initialHeight * overflowRatio + PADDING.VERTICAL;
      } else {
        box.width = width + PADDING.HORIZONTAL;
        box.height = initialHeight + PADDING.VERTICAL;
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

  private mapLinkToNodes(
    link: { source: string; target: string },
    nodes: HierarchyPointNode<BoxNode>[]
  ): HierarchyPointLink<BoxNode> {
    return {
      source: nodes.find((node) => node.data.data.id === link.source),
      target: nodes.find((node) => node.data.data.id === link.target),
    } as HierarchyPointLink<BoxNode>;
  }

  private calculateSeparation(
    a: HierarchyPointNode<BoxNode>,
    b: HierarchyPointNode<BoxNode>
  ): number {
    const siblingSeparation = 1;
    const nonSiblingSeparation = 2;

    // Consider the height of the nodes to determine separation
    const { BOX_PARAMS } = HierarchicalBoxDiagramComponent;
    const additionalSeparation =
      Math.abs(a.x - b.x) < BOX_PARAMS.MAX_BOX_HEIGHT ? 0.5 : 0;

    return a.parent == b.parent
      ? siblingSeparation + additionalSeparation
      : nonSiblingSeparation + additionalSeparation;
  }

  private boxesOverlap(
    first: HierarchyPointNode<BoxNode>,
    second: HierarchyPointNode<BoxNode>
  ): boolean {
    const sensitivityFactor = 5;

    const halfWidth1 = (first.data.data.width ?? 0) / 2 + sensitivityFactor;
    const halfHeight1 = (first.data.data.height ?? 0) / 2 + sensitivityFactor;

    const halfWidth2 = (second.data.data.width ?? 0) / 2 + sensitivityFactor;
    const halfHeight2 = (second.data.data.height ?? 0) / 2 + sensitivityFactor;

    return (
      first.y + halfWidth1 > second.y - halfWidth2 &&
      first.y - halfWidth1 < second.y + halfWidth2 &&
      first.x + halfHeight1 > second.x - halfHeight2 &&
      first.x - halfHeight1 < second.x + halfHeight2
    );
  }

  private removeSvg() {
    if (this.svg) {
      this.svg.remove();
      const svgElement = this.container.nativeElement.querySelector('svg');
      if (svgElement) {
        svgElement.parentNode.removeChild(svgElement);
      }
    }
  }
}
