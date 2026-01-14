"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession()
  console.log(sessionsd);
  
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in With Github</button>
      <button onClick={() => signIn("google")}>Sign in With Google</button>
    </>
  )
}