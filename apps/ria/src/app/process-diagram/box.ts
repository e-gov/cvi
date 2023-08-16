export interface Box {
  x?: number; // x position
  y?: number; // y position
  color: string;
  borderStyle: 'none' | 'dotted';
  id: number;
  label: string;
  targets?: number[]; // Array box ids it points to
  link?: string;
  width?: number; // box width
  height?: number; // box height
}
