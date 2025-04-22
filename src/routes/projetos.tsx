import { createFileRoute } from "@tanstack/react-router";
import Creations from "~/pages/Creations/creations";

export const Route = createFileRoute("/projetos")({
  component: Creations,
});
