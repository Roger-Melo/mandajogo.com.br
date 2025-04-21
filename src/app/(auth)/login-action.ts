import { signIn } from "@/lib/auth"

export async function loginAction() {
  "use server"
  await signIn("google")
}
