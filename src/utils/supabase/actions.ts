"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

export const signInWithGithub = async () => {
  const supabase = await createClient();

  const authCallbackUrl = `http://localhost:3000/auth/callback`;

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo: authCallbackUrl },
  });

  console.log(data);

  if (error) {
    console.log(error.message);
  }

  if (data.url) {
    redirect(data.url);
  }
};

export const signOut = async () => {
  const supabase = await createClient();

  await supabase.auth.signOut();
};
