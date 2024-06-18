import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar";

export default function SiteLayout() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[80px_1fr] md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <Outlet />
    </div>
  );
}
