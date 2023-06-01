import { TabGroupComponent } from './tab-group.component';
import { TabComponent } from './tab.component';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let tab1: TabComponent;
  let tab2: TabComponent;
  const mockChangeDetectorRef = {
    detectChanges: jest.fn(),
    markForCheck: jest.fn(),
  } as unknown as ChangeDetectorRef;

  beforeEach(() => {
    component = new TabGroupComponent(mockChangeDetectorRef);
    tab1 = new TabComponent();
    tab2 = new TabComponent();
    component.allTabs = {
      map: jest.fn().mockReturnValue([new Subject()]),
      get: jest.fn().mockImplementation((index: number) => {
        return index === 0 ? tab1 : tab2;
      }),
      length: 2,
    } as any;
    component.tabButtons = {
      get: jest.fn().mockReturnValue({ nativeElement: { focus: jest.fn() } }),
    } as any;
  });

  it('should emit the active index after view init', () => {
    const emitSpy = jest.spyOn(component.activeTabChange, 'emit');
    component.ngAfterViewInit();
    expect(emitSpy).toHaveBeenCalledWith(0);
  });

  it('should make tab active', () => {
    const emitSpy = jest.spyOn(component.activeTabChange, 'emit');
    component.makeActive(1);
    expect(mockChangeDetectorRef.detectChanges).toHaveBeenCalled();
    expect(component.activeIndex).toEqual(1);
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should activate the previous tab', () => {
    const emitSpy = jest.spyOn(component.activeTabChange, 'emit');
    component.makeActivePrev({ preventDefault: jest.fn() } as any);
    expect(component.activeIndex).toEqual(1);
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should activate the next tab', () => {
    const emitSpy = jest.spyOn(component.activeTabChange, 'emit');
    component.makeActiveNext({ preventDefault: jest.fn() } as any);
    expect(component.activeIndex).toEqual(1);
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should throw an error if there is no active tab', () => {
    component.allTabs.get = jest.fn().mockReturnValue(null);
    expect(() => component.getActiveTabContent()).toThrow(
      `no tab exists with index ${component.activeIndex}`
    );
  });
});
