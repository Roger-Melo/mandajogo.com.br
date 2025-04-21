import { loginAction } from "@/app/(auth)/login-action"

export default function SignUp() {
  return (
    <main>
      <h2>Sign up page</h2>
      <form action={loginAction}>
        <button type="submit">Signin with Google</button>
      </form>
    </main>
  )
}
