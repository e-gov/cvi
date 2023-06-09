import { ReactElement } from "react";

export interface Step {
  title: string;
  content: string | ReactElement | any;
}
