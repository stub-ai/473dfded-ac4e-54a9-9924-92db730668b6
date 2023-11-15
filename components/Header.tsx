import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Jewelry Store</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/rings">
              <a>Rings</a>
            </Link>
          </li>
          <li>
            <Link href="/necklaces">
              <a>Necklaces</a>
            </Link>
          </li>
          <li>
            <Link href="/bracelets">
              <a>Bracelets</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}