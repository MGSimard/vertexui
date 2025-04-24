import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Sidenav } from "@/_components/Sidenav/Sidenav";
export const Route = createRootRoute({
  component: () => (
    <>
      <Sidenav />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});
