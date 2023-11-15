import { INavItem } from "@/interfaces/index";
import { navItems } from "@/data/index";

export function NavList(): JSX.Element {
  const getNavItems = (): JSX.Element[] =>
    navItems.map(
      (item: INavItem, i): JSX.Element => (
        <li key={i}>
          <a href={item.href}>{item.text}</a>
        </li>
      )
    );

  return <>{getNavItems()}</>;
}
