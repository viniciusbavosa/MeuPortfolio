import { createFileRoute } from "@tanstack/react-router";
import Skills from "~/pages/Skills/skills";

export const Route = createFileRoute("/habilidades")({
  component: Skills,
});
