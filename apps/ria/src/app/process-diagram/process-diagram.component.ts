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
import { Box } from './box.interface';

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
  private readonly DEFAULT_MIN_HEIGHT = 50;

  ngAfterViewInit(): void {
    this.createSvg();
    this.drawBoxes();
    this.drawArrows();
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
      .attr('fill', (d: Box) => d.color)
      .attr('stroke', (d: Box) => {
        if (d.borderStyle === 'dotted') {
          return this.darkenColor(d.color, -20);
        }
        return 'none';
      })
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', (d: Box) => {
        if (d.borderStyle === 'dotted') {
          return '1,5';
        }
        return '';
      });

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
      if (box.targets) {
        for (const targetId of box.targets) {
          const targetBox = this.boxes.find((b) => b.id === targetId);
          if (targetBox) {
            const startX = box.x + 100; // Right edge of the start box
            const startY = box.y + 25; // Middle of the start box
            const endX = targetBox.x; // Left edge of the target box
            const endY = targetBox.y + 25; // Middle of the target box

            // If the boxes are on the same Y level
            if (startY === endY) {
              this.drawLine(startX, startY, endX, endY, true);
            } else {
              const middleX = (startX + endX) / 2; // Middle between boxes
              this.drawLine(startX, startY, middleX, startY, false); // Horizontal line from start box
              this.drawLine(middleX, startY, middleX, endY, false); // Vertical line
              this.drawLine(middleX, endY, endX, endY, true); // Horizontal line to the target box with arrow
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
      .attr('refX', 10)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .style('fill', 'black');
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
