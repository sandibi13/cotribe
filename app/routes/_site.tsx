import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar";
import { Header } from "~/components/header";

export default function SiteLayout() {
  return (
    <div className="grid space-x-0 md:space-x-4 lg:space-x-0 min-h-screen w-full grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
