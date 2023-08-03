import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TabsComponent } from './tabs.component';
import { DebugElement } from '@angular/core';

describe('CviTabComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let debugTest: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsComponent],
    }).compileComponents();

    debugTest = fixture.debugElement.queryAll(By.css('.cvi-tabs__list-mobile'));
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create desktop tabs', () => {
    expect(component).toBeTruthy();
  });

  it('should render mobile dropdown menu when screen size is smaller than md breakpoint', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    const mobileTabsDropdown = debugTest[0].nativeElement;

    expect(mobileTabsDropdown).toBeTruthy();
  });
});
