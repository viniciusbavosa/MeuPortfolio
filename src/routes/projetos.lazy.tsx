import { createLazyFileRoute } from "@tanstack/react-router";
import Creations from "~/pages/Creations/creations";

export const Route = createLazyFileRoute("/projetos")({
  component: Creations,
});
