import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
};

export default function BookmarksPage() {
  return (
    <div>
      <h1>Welcome to BookmarksPage!</h1>
    </div>
  );
}
