import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex justify-end w-98 py-3">
      <Link href="/">
        <a>Home</a>
      </Link>
      <ul className="mx-10" >
        <li className="inline">
          <Link href="/posts">
            <a>All posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
