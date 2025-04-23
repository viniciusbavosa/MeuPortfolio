import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "~/pages/Home/home";

export const Route = createLazyFileRoute("/")({
  component: Home,
});
