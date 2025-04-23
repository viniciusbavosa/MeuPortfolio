import { createLazyFileRoute } from "@tanstack/react-router";
import { Contact } from "~/pages/Contact/contact";

export const Route = createLazyFileRoute("/contato")({
  component: Contact,
});
