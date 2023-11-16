import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { NavList } from "@/components/molecules/header/NavList";
import { btnClasses } from "@/enums/index";

export function Header(): JSX.Element {
  return (
    <header>
      <nav className="container flex items-center py-8">
        <Image
          src="/imgs/logo-bookmark.svg"
          alt="Bookmark logo"
          width="148"
          height="25"
        />
        <ul className="items-center justify-end flex-1 hidden gap-12 text-sm uppercase sm:flex text-bookmark-blue">
          <NavList />
          <Button text="Login" type="button" classes={btnClasses.red} />
        </ul>
        <div className="flex justify-end flex-1 sm:hidden">
          <i className="text-2xl cursor-pointer fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}
