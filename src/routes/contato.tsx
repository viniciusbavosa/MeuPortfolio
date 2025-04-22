import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "~/pages/Contact/contact";

export const Route = createFileRoute("/contato")({
  component: Contact,
});
