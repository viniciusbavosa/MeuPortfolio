import { createFileRoute } from "@tanstack/react-router";
import Home from "~/pages/Home/home";

export const Route = createFileRoute("/")({
  component: Home,
});
