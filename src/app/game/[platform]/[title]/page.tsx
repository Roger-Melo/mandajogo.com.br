import { auth } from "@/lib/auth"

export default async function GamePage() {
  const session = await auth()
  console.log(session)
  return (
    <main>
      <h2>BloodBorne</h2>
      <p>Enfrente seus medos neste novo mundo, onde o perigo, a morte e a loucura estão à espreita em cada esquina.</p>
      {session?.user && (
        <div style={{ width: "200px", height: "200px", backgroundColor: "blueviolet" }}>
          <p>Componente só pro user</p>
        </div>
      )}
    </main>
  )
}
