import { Injectable } from '@angular/core';
import { CviIcon, CviIconName } from '@ria/cvi-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsRegistry {
  private registry = new Map<CviIconName, string>();

  public registerIcons(icons: CviIcon[]): void {
    icons.forEach((icon: CviIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: CviIconName): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the Icon with the name ${iconName}, did you add it to the IconRegistry?`
      );
    }
    return this.registry.get(iconName);
  }
}
