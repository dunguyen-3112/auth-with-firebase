import { auth } from "@/firebase.config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export interface AuthUser {
  email: string;
  password: string;
}

export async function signUp({ email, password }: AuthUser) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  return user;
}

export async function signIn({ email, password }: AuthUser) {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}
