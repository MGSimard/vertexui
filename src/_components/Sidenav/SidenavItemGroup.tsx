import { useState } from "react";
import { SidenavItem, type SidenavItemPropTypes } from "./SidenavItem";

interface SidenavItemGroupPropTypes {
  id: string;
  label: string;
  items: SidenavItemPropTypes[];
  icon?: React.ReactNode;
}

export function SidenavItemGroup({ id, label, items, icon }: SidenavItemGroupPropTypes) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="sidenav-itemgroup">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`sidenav-submenu-${id}`}
        onClick={() => setIsOpen(!isOpen)}>
        {icon}
        <span>{label}</span>
      </button>
      <div id={`sidenav-submenu-${id}`} inert={!isOpen}>
        <ul>
          {items.map((item) => (
            <SidenavItem item={item} />
          ))}
        </ul>
      </div>
    </li>
  );
}
