import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import * as d3 from 'd3';
import { Box } from './box';

@Component({
  selector: 'cvi-ng-process-diagram',
  templateUrl: './process-diagram.component.html',
  styleUrls: ['./process-diagram.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDiagramComponent implements AfterViewInit {
  @Input() boxes!: Box[];
  @ViewChild('diagram') diagramRef!: ElementRef;

  private svg: any;
  private readonly DEFAULT_MIN_WIDTH = 100;
  private readonly DEFAULT_MIN_HEIGHT = 30;
  private readonly ROUNDED_CORNER_RADIUS = 5;

  ngAfterViewInit(): void {
    this.centerGraph();
    this.generateLayout();
    this.createSvg();
    this.drawBoxes();
    this.drawArrows();
  }

  private centerGraph(): void {
    // Step 1: Compute graph dimensions
    let minGraphX = Infinity;
    let maxGraphX = -Infinity;
    let minGraphY = Infinity;
    let maxGraphY = -Infinity;

    for (const box of this.boxes) {
      const boxWidth = box.width || this.DEFAULT_MIN_WIDTH;
      const boxHeight = box.height || this.DEFAULT_MIN_HEIGHT;

      minGraphX = Math.min(minGraphX, box.x || 0);
      maxGraphX = Math.max(maxGraphX, (box.x || 0) + boxWidth);

      minGraphY = Math.min(minGraphY, box.y || 0);
      maxGraphY = Math.max(maxGraphY, (box.y || 0) + boxHeight);
    }

    const graphWidth = maxGraphX - minGraphX;
    const graphHeight = maxGraphY - minGraphY;

    // SVG canvas dimensions
    const canvasWidth = this.diagramRef.nativeElement.scrollWidth;
    const canvasHeight = this.diagramRef.nativeElement.scrollHeight;

    // Step 2: Adjust box x and y coordinates
    const xOffset = (canvasWidth - graphWidth) / 2 - minGraphX;
    const yOffset = (canvasHeight - graphHeight) / 2 - minGraphY;

    for (const box of this.boxes) {
      if (box.x !== undefined) {
        box.x += xOffset;
      }
      if (box.y !== undefined) {
        box.y += yOffset;
      }
    }
  }


  private generateLayout() {
    const layers: number[][] = [];
    const coveredBoxIds: number[] = [];

    // Determine the initial layer: boxes without a predecessor
    const initialLayer = this.boxes.filter(
      (box) => !this.boxes.some((b) => b.targets && b.targets.includes(box.id))
    );
    layers.push(initialLayer.map((box) => box.id));
    coveredBoxIds.push(...initialLayer.map((box) => box.id));

    while (coveredBoxIds.length < this.boxes.length) {
      const nextLayer: number[] = [];
      for (const boxId of layers[layers.length - 1]) {
        const currentBox = this.boxes.find((b) => b.id === boxId);
        if (currentBox?.targets) {
          for (const target of currentBox.targets) {
            if (
              !coveredBoxIds.includes(target) &&
              !nextLayer.includes(target)
            ) {
              nextLayer.push(target);
              coveredBoxIds.push(target);
            }
          }
        }
      }
      layers.push(nextLayer);
    }
  }

  private createSvg(): void {
    const areaWidth = this.diagramRef.nativeElement.offsetWidth;
    const areaHeight = this.diagramRef.nativeElement.offsetHeight;

    this.svg = d3
      .select(this.diagramRef.nativeElement)
      .append('svg')
      .attr('width', areaWidth)
      .attr('height', areaHeight);
  }

  private darkenColor(color: string, percent: number): string {
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

  private drawBoxes(): void {
    const links = this.svg
      .selectAll('a')
      .data(this.boxes.filter((box) => box.link))
      .enter()
      .append('a')
      .attr('xlink:href', (d: Box) => d.link);

    (links.nodes().length ? links : this.svg)
      .selectAll('rect')
      .data(this.boxes)
      .enter()
      .append('rect')
      .attr('x', (d: Box) => d.x)
      .attr('y', (d: Box) => d.y)
      .attr('width', (d: Box) => d.width || this.DEFAULT_MIN_WIDTH)
      .attr('height', (d: Box) => d.height || this.DEFAULT_MIN_HEIGHT)
      .attr('rx', this.ROUNDED_CORNER_RADIUS)
      .attr('ry', this.ROUNDED_CORNER_RADIUS)
      .attr('fill', (d: Box) => d.color)
      .attr('stroke', (d: Box) => {
        if (d.borderStyle === 'dotted' || d.borderStyle === 'solid') {
          return d.borderColor || this.darkenColor(d.color, -20);
        }
        return 'none';
      })
      .attr('stroke-dasharray', (d: Box) => {
        if (d.borderStyle === 'dotted') {
          return '1,5';
        }
        return '';
      })
      .attr('stroke-width', 2);

    (links.nodes().length ? links : this.svg)
      .selectAll('foreignObject')
      .data(this.boxes)
      .enter()
      .append('foreignObject')
      .attr('x', (d: Box) => d.x)
      .attr('y', (d: Box) => d.y)
      .attr('width', (d: Box) => d.width || this.DEFAULT_MIN_WIDTH)
      .attr('height', (d: Box) => d.height || this.DEFAULT_MIN_HEIGHT)
      .html((d: Box) => `<div class="box-content">${d.label}</div>`)
      .style('font-size', '14px')
      .style('line-height', '24px');
  }

  private drawArrows(): void {
    for (const box of this.boxes) {
      const boxWidth = box.width || this.DEFAULT_MIN_WIDTH;
      const boxHeight = box.height || this.DEFAULT_MIN_HEIGHT;
      const boxX = box.x || 0;
      const boxY = box.y || 0;

      if (box.targets) {
        for (const targetId of box.targets) {
          const targetBox = this.boxes.find((b) => b.id === targetId);
          if (targetBox) {
            const targetBoxWidth = targetBox.width || this.DEFAULT_MIN_WIDTH;
            const targetBoxHeight = targetBox.height || this.DEFAULT_MIN_HEIGHT;
            const targetBoxX = targetBox.x || 0;
            const targetBoxY = targetBox.y || 0;

            if (targetBoxX > boxX) {
              // Target is to the right
              this.drawHorizontalArrow(
                boxX + boxWidth,
                boxY + boxHeight / 2,
                targetBoxX,
                targetBoxY + targetBoxHeight / 2
              );
            } else if (targetBoxX < boxX) {
              // Target is to the left
              this.drawHorizontalArrow(
                boxX,
                boxY + boxHeight / 2,
                targetBoxX + targetBoxWidth,
                targetBoxY + targetBoxHeight / 2
              );
            } else if (targetBoxY > boxY) {
              // Target is below
              this.drawVerticalArrow(
                boxX + boxWidth / 2,
                boxY + boxHeight,
                targetBoxX + targetBoxWidth / 2,
                targetBoxY
              );
            } else {
              // Target is above
              this.drawVerticalArrow(
                boxX + boxWidth / 2,
                boxY,
                targetBoxX + targetBoxWidth / 2,
                targetBoxY + targetBoxHeight
              );
            }
          }
        }
      }
    }

    // Define the arrow marker details
    this.svg
      .append('svg:defs')
      .selectAll('marker')
      .data(['arrow'])
      .enter()
      .append('svg:marker')
      .attr('id', String)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 9)
      .attr('refY', 0)
      .attr('markerWidth', 4)
      .attr('markerHeight', 4)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .style('fill', 'black');
  }

  private drawHorizontalArrow(
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): void {
    const middleX = (startX + endX) / 2;
    this.drawLine(startX, startY, middleX, startY, false); // Horizontal line from start box
    this.drawLine(middleX, startY, middleX, endY, false); // Vertical line
    this.drawLine(middleX, endY, endX, endY, true); // Horizontal line to the target box with arrow
  }

  private drawVerticalArrow(
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ): void {
    const middleY = (startY + endY) / 2;
    this.drawLine(startX, startY, startX, middleY, false); // Vertical line from start box
    this.drawLine(startX, middleY, endX, middleY, false); // Horizontal line
    this.drawLine(endX, middleY, endX, endY, true); // Vertical line to the target box with arrow
  }

  private drawLine(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    addArrow: boolean
  ): void {
    this.svg
      .append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .attr('stroke-width', 2)
      .attr('stroke', 'black')
      .attr('marker-end', addArrow ? 'url(#arrow)' : '');
  }
}
