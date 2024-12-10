import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'cvi-ng-progress-bar',
  templateUrl: './progress-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() progressValueMin?: number = 0;
  @Input() progressValueMax?: number = 3;
  @Input() progressValue?: number = 0;

  @Input() progressMessage?: string;
  @Input() successMessage?: string;

  @HostBinding('class') get hostClasses(): string {
    return `cvi-progress-bar`;
  }

  @HostBinding('class.is-progress-finished')
  get progressFinished(): boolean {
    return this.progressValue === this.progressValueMax;
  }

  @HostBinding('style.--progress')
  get progress(): string {
    const percentage = this.getProgressPercentage(
      this.progressValueMin,
      this.progressValueMax,
      this.progressValue
    );
    return `${percentage}%`;
  }

  @HostBinding('style.--circle-stroke-width')
  get circleStrokeWidth(): number {
    return 16;
  }

  @HostBinding('style.--circle-radius')
  get circleRadius(): number {
    return 90;
  }

  getCircleDiameter(): number {
    return this.circleRadius * 2;
  }

  getCircleBoundaries(): number {
    return this.circleRadius - this.circleStrokeWidth / 2;
  }

  getCircleCircumference(): number {
    return 2 * Math.PI * this.circleRadius;
  }

  getCircleOffset(): number {
    const progress = this.getProgressPercentage(
      this.progressValueMin,
      this.progressValueMax,
      this.progressValue
    );
    return (
      this.getCircleCircumference() -
      (progress / 100) * this.getCircleCircumference()
    );
  }

  getProgressPercentage(
    minValue = 0,
    maxValue = 100,
    currentValue = 0
  ): number {
    if (currentValue <= minValue) return 0;
    if (currentValue > maxValue) return 100;

    const progress = ((currentValue - minValue) / (maxValue - minValue)) * 100;
    return Math.round(progress);
  }
}
