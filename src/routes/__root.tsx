import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidenav } from "@/_components/Sidenav/Sidenav";
import { Footer } from "@/_components/Footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Sidenav />
      <header></header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});
