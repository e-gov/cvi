import * as iconsModule from '@ria/veera-icons';
import { VeeraIcon } from '@ria/veera-icons';

const icons = Object.entries(iconsModule)
  .filter((item) => item[0] !== 'completeIconSet')
  .map(([, v]) => v) as VeeraIcon[];

export const storybookIcons: VeeraIcon[] = icons;
export const storybookIconsNames: string[] = icons.map((item) => item.name);
