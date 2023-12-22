// Navbar.js
import Link from "next/link"
import "@/css/main.css"

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  )
}

export default Navbar
