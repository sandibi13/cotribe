import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function IndexPage() {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <nav />

      <div className="container md:flex justify-center items-center px-4 md:px-6 flex-1">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            A{" "}
            <span className="font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">
              Community-Driven
            </span>{" "}
            Social Platform for{" "}
            <span className="font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text bg-300% animate-gradient">
              Developers
            </span>{" "}
            to Connect
          </h1>

          <Button asChild>
            <Link to="/login">Join our Community</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
