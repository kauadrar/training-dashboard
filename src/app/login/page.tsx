"use client";

import { signInWithGithub } from "@/utils/supabase/actions";

export default function LoginPage() {
  return (
    <div>
      <button onClick={signInWithGithub}>Login</button>
    </div>
  );
}
