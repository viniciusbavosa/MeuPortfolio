import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "~/components/loader/loader";
import { getData } from "~/helpers/fetch";
import NotFound from "~/pages/404/404";
import { Articles } from "~/pages/Articles/articles";

export const Route = createFileRoute("/artigos")({
  component: Articles,
  pendingComponent: Loader,
  errorComponent: NotFound,
  loader: async ({ context: { queryClient } }) => {
    queryClient.prefetchQuery({
      queryKey: ["articles"],
      queryFn: () =>
        getData("https://dev.to/api/articles?username=viniciusbavosa"),
    });
  },
});
