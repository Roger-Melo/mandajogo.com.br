import Link from "next/link"

export default function Home() {
  return (
    <div>
      <main>
        <h2>Main</h2>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </main>
      <footer>Footer</footer>
    </div>
  )
}
