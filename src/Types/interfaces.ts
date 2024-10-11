import { ReactNode, RefObject } from "react";

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
  whiteColor?: boolean;
}

export interface IAboutUs {
  reverse?: boolean;
  img: string;
  component: JSX.Element;
}
export default interface IservicesSection {
  color: string;
  icon: string;
  delay: number;
  title: string;
  desc: string;
}
export interface HowToUseDetailsProps {
  icon: string;
  title: string;
  delay: number;
}
export interface StatisticsProps {
  title: string;
  statistics: number;
  color: string;
}
export interface IMainQuestionsProps {
  title: string;
  disc: string;
}
export interface IDocsProps {
  title: string;
  delay: number;
}
export interface IConsltantsProps {
  cover: string;
  name: string;
  jobPosition: string;
  socialMediaIcon: string;
  delay: number;
}
export interface ITeamWorkData {
  id: number;
  cover: string;
  name: string;
  workPosition: string;
  delay: number;
}
export interface IBoxNewsProps {
  id: number;
  disc: string;
  logo: string;
}
export interface ILiseneseIconsProps {
  icon: JSX.Element;
}
export interface ITitleSectionProps {
  topic: string;
  title: string;
  direction: "center" | "right";
  isAfter: boolean;
}

export interface IRefContext {
  ServicesRef: RefObject<HTMLDivElement> | null;
  MyTeamRef: RefObject<HTMLDivElement> | null;
  AboutUsRef: RefObject<HTMLDivElement> | null;
  MapRef: RefObject<HTMLDivElement> | null;
  QuestionsRef: RefObject<HTMLDivElement> | null;
  TokenRef: RefObject<HTMLDivElement> | null;
  GuideRef: RefObject<HTMLDivElement> | null;
}
