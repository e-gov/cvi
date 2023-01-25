import * as iconsModule from '@egov/cvi-icons';
import { CviIcon } from '@egov/cvi-icons';

const icons = Object.entries(iconsModule)
  .filter((item) => item[0] !== 'completeIconSet')
  .map(([, v]) => v) as CviIcon[];

export const storybookIcons: CviIcon[] = icons;
export const storybookIconsNames: string[] = icons.map((item) => item.name);
