import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCellComponent } from './body-cell.component';

describe('BodyCellComponent', () => {
  let component: BodyCellComponent;
  let fixture: ComponentFixture<BodyCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
