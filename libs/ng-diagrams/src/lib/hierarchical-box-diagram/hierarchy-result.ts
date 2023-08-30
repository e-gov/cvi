import { BoxNode } from './box-node';

export interface HierarchyResult {
  rootNode: BoxNode;
  additionalLinks: { source: string; target: string }[];
}
