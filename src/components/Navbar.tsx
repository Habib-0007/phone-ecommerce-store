import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-betweeen items-center gap-[12px] flex-row">
      <Link to={"/home"}>Home</Link>
      <Link to={"/about-us"}>About</Link>
      <Link to={"/contact-us"}>Contact Us</Link>
      <Link to={"/blog"}>Blog</Link>
    </nav>
  )
}

export default Navbar
