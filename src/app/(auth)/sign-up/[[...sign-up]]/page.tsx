import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoteSwift - Sign Up",
};

export default function Page() {
  return (
    <SignUp
      appearance={{ variables: { colorPrimary: "#0F172A" } }}
      path="/sign-up"
    />
  );
}
