import { Bell, Bookmark, Home, Mail, Search, User } from "lucide-react";

export const navLinks = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/explore", icon: Search, label: "Explore" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/messages", icon: Mail, label: "Messages" },
  { to: "/bookmarks", icon: Bookmark, label: "Bookmarks" },
  { to: "/profile", icon: User, label: "Profile" },
];
