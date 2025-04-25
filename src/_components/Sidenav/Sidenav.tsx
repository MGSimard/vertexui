import "./Sidenav.css";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

interface SidenavItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export function Sidenav() {
  return (
    <nav id="sidenav">
      <SidenavHeader />
      <SidenavContent />
      <SidenavFooter />
    </nav>
  );
}
// Sidenav Header
function SidenavHeader() {
  return <div>Sidenav Header</div>;
}

// Sidenav Content, Items (Links, Link Groups)
function SidenavContent() {
  return (
    <ul id="sidenav-content">
      Sidenav Content
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItemGroup
        id="1"
        label="Group 1"
        items={[
          { label: "Sidenav Item", href: "#" },
          { label: "Sidenav Item", href: "#" },
        ]}
      />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
    </ul>
  );
}

function SidenavItem({ item }: { item: SidenavItemProps }) {
  return (
    <li className="sidenav-item">
      <Link to={item.href}>{item.label}</Link>
    </li>
  );
}

function SidenavItemGroup({ id, label, items }: { id: string; label: string; items: SidenavItemProps[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="sidenav-itemgroup">
      <button
        disabled
        type="button"
        aria-expanded={isOpen}
        aria-controls={`sidenav-submenu-${id}`}
        onClick={() => setIsOpen(!isOpen)}>
        {label}
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

// Sidenav Footer
function SidenavFooter() {
  return <div id="sidenav-footer">Sidenav Footer</div>;
}
