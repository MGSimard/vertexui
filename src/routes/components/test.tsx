import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/components/test"!</div>;
}
