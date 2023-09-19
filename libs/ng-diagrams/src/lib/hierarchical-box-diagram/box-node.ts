import { Box } from './box';

export interface BoxNode {
  data: Box;
  children?: BoxNode[];
  parent?: BoxNode;
}
