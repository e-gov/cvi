import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSectionComponent } from './html-section.component';
import { SafeHtmlPipe } from '../pipes/safe-html-pipe';

describe('ContactsComponent', () => {
  let component: HtmlSectionComponent;
  let fixture: ComponentFixture<HtmlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlSectionComponent, SafeHtmlPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
