import Header from '../components/Header'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Jewelry Store</h1>
        <Login />
      </main>
    </div>
  )
}