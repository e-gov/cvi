import * as iconsModule from '@ria/cvi-icons';
import { CviIcon } from '@ria/cvi-icons';

const icons = Object.entries(iconsModule)
  .filter((item) => item[0] !== 'completeIconSet')
  .map(([, v]) => v) as CviIcon[];

export const storybookIcons: CviIcon[] = icons;
export const storybookIconsNames: string[] = icons.map((item) => item.name);
