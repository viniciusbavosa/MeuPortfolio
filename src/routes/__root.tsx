import { QueryClient } from "@tanstack/react-query";
import {
  createRootRoute,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Layout } from "~/layout/layout";
import NotFound from "~/pages/404/404";

interface RouterContext {
  queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: NotFound,
  component: Layout,
});
