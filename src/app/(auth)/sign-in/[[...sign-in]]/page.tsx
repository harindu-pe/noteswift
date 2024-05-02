import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteSwift - Sign In",
};

export default function Page() {
  return (
    <SignIn
      appearance={{ variables: { colorPrimary: "#0F172A" } }}
      path="/sign-in"
    />
  );
}
