import { Injectable } from '@angular/core';
import { VeeraIcon, VeeraIconName } from '@ria/veera-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsRegistry {
  private registry = new Map<VeeraIconName, string>();

  public registerIcons(icons: VeeraIcon[]): void {
    icons.forEach((icon: VeeraIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: VeeraIconName): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the Icon with the name ${iconName}, did you add it to the IconRegistry?`
      );
    }
    return this.registry.get(iconName);
  }
}
