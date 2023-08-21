export interface Box {
  id: string;
  label: string;
  color: string;
  borderStyle: 'none' | 'dotted' | 'solid';
  borderColor?: string;
  targets?: string[];
  href?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  x0?: number;
  y0?: number;
}
