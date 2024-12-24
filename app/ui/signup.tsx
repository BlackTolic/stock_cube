"use client";

import { useActionState } from "react";
import { createUser } from "@/app/actions";

const initialState = {
  message: "11111",
};

export function SignUp() {
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" required />
      {/* ... */}
      <p aria-live="polite">{state?.message}</p>
      <button>Sign up</button>
    </form>
  );
}
