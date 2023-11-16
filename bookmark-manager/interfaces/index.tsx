import React, { ReactNode } from "react";
import { btnClasses } from "@/enums/index";

export interface IRectProps {
  type: string;
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classes: btnClasses;
}

export interface INavItem {
  href: string;
  text: string;
}

export interface IChildren {
  children: ReactNode;
}
export interface ISectionHeading {
  title: string;
  description: string;
}

export interface IFeatureCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: string;
  mt: string;
  direction: string;
}

export interface IDownloadCard {
  alt: string;
  src: string;
  title: string;
  subtitle: string;
  m: string;
}
export interface IFaqAccordion {
  summary: string;
  details: string;
}
