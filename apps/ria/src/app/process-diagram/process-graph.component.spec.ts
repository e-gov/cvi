import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessGraphComponent } from './process-graph.component';

describe('ProcessDiagramComponent', () => {
  let component: ProcessGraphComponent;
  let fixture: ComponentFixture<ProcessGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessGraphComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
