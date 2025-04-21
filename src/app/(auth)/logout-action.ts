import { signOut } from "@/lib/auth"

export async function logoutAction() {
  "use server"
  await signOut()
}
