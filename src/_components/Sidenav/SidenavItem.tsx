import { Link } from "@tanstack/react-router";

export interface SidenavItemPropTypes {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export function SidenavItem({ item }: { item: SidenavItemPropTypes }) {
  return (
    <li className="sidenav-item">
      <Link to={item.href}>
        {item.icon}
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
