import Link from "next/link"

const Nav = () => {
  return (
    <div className="container">

      <div className="navbar">
        <Link href="/">
          <h1>AirBnb</h1>
        </Link>
        <div className="search">
          <form>
            <div className="input-container">
              <input type="text" placeholder="Search Properties" />
            </div>
            <div>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </form>
        </div>
        <div className="menu">
          <ul className="nav-menu">
            <li>
              <a  href="#listings" className="nav-link"
              >Listings</a
              >
            </li>
            <li>
              <a  href="#featured" className="nav-link"
              >Featured</a
              >
            </li>
            <li>
              <a  href="#popular" className="nav-link"
              >Popular</a
              >
            </li>
          </ul>
          <div  className="mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Nav