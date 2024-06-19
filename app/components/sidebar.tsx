import { Link, useLocation } from "@remix-run/react";
import { Logo } from "./logo";
import { UserButton } from "@clerk/remix";
import { navLinks } from "~/utils/links";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden sm:block">
      <div className="fixed top-4 left-4 bottom-4 w-20 lg:w-64 rounded-lg shadow-lg border bg-muted/40 p-4 flex flex-col">
        <div className="flex h-14 items-center border-b pb-2 mb-2">
          <Link
            to="/"
            className="flex items-center justify-center lg:justify-start gap-2 font-semibold p-2"
          >
            <Logo className="h-8 w-8" />
            <span className="hidden lg:inline">Cotribe</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto">
          <nav className="grid gap-2 text-sm font-medium">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center justify-center lg:justify-start gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  location.pathname === to
                    ? "bg-muted text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden lg:inline">{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
};
