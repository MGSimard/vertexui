import "./Sidenav.css";

export function Sidenav() {
  return (
    <nav id="sidenav">
      <SidenavHeader />
      <SidenavContent />
      <SidenavFooter />
    </nav>
  );
}

function SidenavHeader() {
  return <div>Sidenav Header</div>;
}

function SidenavContent() {
  return (
    <ul id="sidenav-content">
      Sidenav Content
      <SidenavItem />
      <SidenavItem />
      <SidenavItem />
      <SidenavItemGroup />
    </ul>
  );
}
function SidenavItem() {
  return <li className="sidenav-item">Sidenav Item</li>;
}
function SidenavItemGroup() {
  return (
    <li className="sidenav-itemgroup">
      <button type="button">Sidenav Item Group</button>
      <ul>
        <SidenavItem />
        <SidenavItem />
        <SidenavItem />
      </ul>
    </li>
  );
}

function SidenavFooter() {
  return <div id="sidenav-footer">Sidenav Footer</div>;
}
