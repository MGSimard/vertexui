export function Sidenav() {
  return (
    <nav>
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
    <ul>
      Sidenav Content
      <SidenavItem />
      <SidenavItem />
      <SidenavItem />
      <SidenavItemGroup />
    </ul>
  );
}
function SidenavItem() {
  return <li>Sidenav Item</li>;
}
function SidenavItemGroup() {
  return (
    <li>
      Sidenav Item Group
      <ul>
        <SidenavItem />
        <SidenavItem />
        <SidenavItem />
      </ul>
    </li>
  );
}

function SidenavFooter() {
  return <div>Sidenav Footer</div>;
}
