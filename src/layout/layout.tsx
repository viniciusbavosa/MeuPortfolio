import { Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
