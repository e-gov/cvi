export interface Box {
  x: number;
  y: number;
  color: string;
  borderStyle: 'none' | 'dotted';
  id: number;
  label: string;
  targets?: number[]; // Array box ids it points to
  link?: string;
  width?: number;
  height?: number;
}
