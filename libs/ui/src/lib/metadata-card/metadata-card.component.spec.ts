import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetadataCardComponent } from '@egov/cvi-ng';

describe('MetadataCardComponent', () => {
  let component: MetadataCardComponent;
  let fixture: ComponentFixture<MetadataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetadataCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetadataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
