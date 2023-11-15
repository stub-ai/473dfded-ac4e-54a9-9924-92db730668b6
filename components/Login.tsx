import { useState, FormEvent } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle login
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">
        Login
      </button>
    </form>
  )
}