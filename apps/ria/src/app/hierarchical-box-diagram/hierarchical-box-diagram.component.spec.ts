import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalBoxDiagramComponent } from './hierarchical-box-diagram.component';

describe('ProcessDiagramComponent', () => {
  let component: HierarchicalBoxDiagramComponent;
  let fixture: ComponentFixture<HierarchicalBoxDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HierarchicalBoxDiagramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HierarchicalBoxDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
