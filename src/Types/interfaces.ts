import { ReactNode } from "react";

export interface INavLink {
  title: string;
  id: number;
  link: string;
}
export interface ISelectoptions {
  id: number;
  label: string;
}
export interface ISelectBox {
  data: ISelectoptions[];
  isScroll: boolean;
}
export interface TopicBoxProps {
  title: string;
  topic: string;
  children: ReactNode;
  disc: string;
}

export interface IAboutUs {
  reverse?: boolean;
  img: string;
  component: JSX.Element;
}
