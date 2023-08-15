export interface Box {
  x: number;
  y: number;
  color: string;
  borderStyle: 'none' | 'dotted';
  id: number;
  label: string;
  targets?: number[]; // Array of ids of boxes it points to
  link?: string; // The link is optional
  width?: number;
  height?: number;
}
