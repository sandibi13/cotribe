import { Link, useLocation } from "@remix-run/react";
import { Bell, Bookmark, Home, Mail, Menu, Search, User } from "lucide-react";
import { UserButton } from "@clerk/remix";
import { Button } from "~/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "~/components/ui/sheet";
import { Logo } from "~/components/logo";

const navLinks = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/explore", icon: Search, label: "Explore" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/messages", icon: Mail, label: "Messages" },
  { to: "/bookmarks", icon: Bookmark, label: "Bookmarks" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Logo className="h-8 w-8" />
              <span className="sr-only">Codetribe</span>
            </Link>
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={label}
                to={to}
                className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${
                  location.pathname === to
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto"></div>
        </SheetContent>
      </Sheet>

      <UserButton />
    </header>
  );
};
