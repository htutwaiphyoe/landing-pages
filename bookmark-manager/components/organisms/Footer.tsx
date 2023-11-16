import Image from "next/image";
import { INavItem } from "@/interfaces/index";
import { NavList } from "@/components/molecules/header/NavList";
import { socials } from "@/data/index";

export function Footer(): JSX.Element {
  return (
    <footer className="py-8 text-white bg-bookmark-blue">
      <div className="container flex flex-col items-center md:flex-row">
        <div className="flex flex-col items-center justify-center flex-1 gap-10 px-2 sm:flex-row md:justify-start">
          <Image
            src="/imgs/logo-bookmark-white.png"
            alt="Bookmark logo"
            width="140"
            height="25"
          />
          <ul className="flex flex-col gap-10 text-sm text-center text-white uppercase sm:flex-row">
            <NavList />
          </ul>
        </div>
        <ul className="flex gap-10 mt-12 md:mt-0">
          {socials.map(
            (social: INavItem, i: number): JSX.Element => (
              <li key={i}>
                <a href={social.href}>
                  <i className={`text-2xl text-white fab ${social.text}`}></i>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </footer>
  );
}
