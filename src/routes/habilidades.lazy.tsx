import { createLazyFileRoute } from "@tanstack/react-router";
import Skills from "~/pages/Skills/skills";

export const Route = createLazyFileRoute("/habilidades")({
  component: Skills,
});
