import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components/testtwo")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/components/testtwo"!</div>;
}
