import { SidenavItem } from "./SidenavItem";
import { SidenavItemGroup } from "./SidenavItemGroup";
import { IconCalendar, IconHome } from "@/_components/Icons";
import "./Sidenav.css";

// Debating if I want a link array here or just keep singulars

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
  return (
    <div id="sidenav-header">
      <img src="" alt="O" />
      VertexUI
    </div>
  );
}

// Sidenav Content, Items (Links, Link Groups)
function SidenavContent() {
  return (
    <ul id="sidenav-content">
      <SidenavItem item={{ label: "Home", href: "/", icon: <IconHome /> }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#", icon: <IconCalendar /> }} />
      <SidenavItem item={{ label: "Sidenav Item", href: "#" }} />
      <SidenavItemGroup
        id="1"
        label="Group 1"
        icon={<IconHome />}
        items={[
          { label: "Sidenav Item", href: "/" },
          { label: "Sidenav Item", href: "#" },
        ]}
      />
      <SidenavItemGroup
        id="2"
        label="Group 2"
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

// Sidenav Footer
function SidenavFooter() {
  return <div id="sidenav-footer">Sidenav Footer</div>;
}
