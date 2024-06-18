import Particles from "~/components/particles";
import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Particles className="absolute inset-0 -z-10" />

      <SignIn />
    </div>
  );
}
