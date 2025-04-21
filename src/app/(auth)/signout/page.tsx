import { logoutAction } from "@/app/(auth)/logout-action"

export default function Logout() {
  return (
    <main>
      <h2>Sign up page</h2>
      <form action={logoutAction}>
        <button type="submit">Logout</button>
      </form>
    </main>
  )
}
