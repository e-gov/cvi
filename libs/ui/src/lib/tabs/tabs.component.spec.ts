import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CviTabsComponent } from './tabs.component';

describe('CviTabComponent', () => {
  let component: CviTabsComponent;
  let fixture: ComponentFixture<CviTabsComponent>;

  const debugTest = fixture.debugElement.queryAll(
    By.css('.cvi-tabs__list-mobile')
  );
  const mobileTabsDropdown = debugTest[0].nativeElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CviTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CviTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create desktop tabs', () => {
    expect(component).toBeTruthy();
  });

  it('should render mobile dropdown menu when screen size is smaller than md breakpoint', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));

    expect(mobileTabsDropdown).toBeTruthy();
  });
});
