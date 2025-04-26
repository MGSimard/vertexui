import { SidenavItem } from "./SidenavItem";
import { SidenavItemGroup } from "./SidenavItemGroup";
import { IconCalendar, IconCube, IconHome, IconInformation } from "@/_components/Icons";
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
      <SidenavItem item={{ label: "Calendar", href: "/calendar", icon: <IconCalendar /> }} />
      <SidenavItemGroup
        id="sng1"
        label="Components"
        icon={<IconCube />}
        items={[
          { label: "Test", href: "/components/test" },
          { label: "Test Two", href: "/components/testtwo" },
        ]}
      />
      <SidenavItem item={{ label: "About", href: "/about", icon: <IconInformation /> }} />
    </ul>
  );
}

// Sidenav Footer
function SidenavFooter() {
  return (
    <div id="sidenav-footer">
      Sidenav Footer
      <div id="sidenav-user">
        <img id="sidenav-user-avatar" src="" alt="Avatar" />
        <div id="sidenav-user-name">Guest 7702</div>
        <div id="sidenav-user-describer">Better Auth Access Manager.</div>
      </div>
      <form id="sidenav-auth">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
