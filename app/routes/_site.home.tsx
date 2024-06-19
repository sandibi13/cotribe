import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function HomePage() {
  return (
    <>
      <div className="flex-1 p-4">
        <div className="border rounded-lg p-4 shadow-lg bg-muted/40 h-full">
          <h1>Feeds</h1>
        </div>
      </div>
    </>
  );
}
