import { IFeatureCardProps } from "@/interfaces/index";
import { INavItem } from "@/interfaces/index";
import { IFaqAccordion } from "@/interfaces/index";
import { IDownloadCard } from "@/interfaces/index";

export const features: IFeatureCardProps[] = [
  {
    src: "/imgs/illustration-features-tab-1.png",
    alt: "feature 1",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your  favorite sites.",
    mt: "24",
    type: "left",
    direction: "lg:flex-row",
  },
  {
    src: "/imgs/illustration-features-tab-2.png",
    alt: "feature 2",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no  time at all. No need to crawl through all of your bookmarks.",
    mt: "36",
    type: "right",
    direction: "lg:flex-row-reverse",
  },
  {
    src: "/imgs/illustration-features-tab-3.png",
    alt: "feature 3",
    title: "Share your bookmarks",
    description:
      " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    mt: "36",
    type: "left",
    direction: "lg:flex-row",
  },
];

export const navItems: INavItem[] = [
  { href: "#features", text: "Features" },
  { href: "#download", text: "Download" },
  { href: "#contact", text: "Contact" },
];

export const socials: INavItem[] = [
  { text: "fa-facebook-square", href: "www.facebook.com" },
  { text: "fa-twitter", href: "www.twitter.com" },
];

export const faqs: IFaqAccordion[] = [
  {
    summary: "What is a Bookmark?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
  },
  {
    summary: "How can I request a new browser?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
  },
  {
    summary: "Is there a mobile app?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
  },
  {
    summary: "What about other Chromium browsers?",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dicta modi tenetur sunt nemo quidem",
  },
];

export const downloads: IDownloadCard[] = [
  {
    alt: "chrome",
    src: "/imgs/logo-chrome.svg",
    m: "lg:mb-16",
    title: "Add to Chrome",
    subtitle: "Minimum version 62",
  },
  {
    alt: "firefox",
    src: "/imgs/logo-firefox.svg",
    m: "lg:my-8",
    title: "Add to Firefox",
    subtitle: "Minimum version 62",
  },
  {
    alt: "opera mini",
    src: "/imgs/logo-opera.svg",
    m: "lg:mt-16",
    title: "Add to Opera Mini",
    subtitle: "Minimum version 62",
  },
];
