import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Sidenav } from "@/_components/Sidenav/Sidenav";
import { Header } from "@/_components/Header/Header";
import { Footer } from "@/_components/Footer/Footer";
export const Route = createRootRoute({
  component: () => (
    <>
      <Sidenav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ),
});
