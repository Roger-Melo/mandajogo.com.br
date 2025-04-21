import { loginAction } from "@/app/(auth)/login-action"

export default function Login() {
  return (
    <main>
      <h2>Login page</h2>
      <form action={loginAction}>
        <button type="submit">Signin with Google</button>
      </form>
    </main>
  )
}
