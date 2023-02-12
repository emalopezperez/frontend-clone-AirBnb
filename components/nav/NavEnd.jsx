import Link from "next/link"


const NavEnd = () => {
  return (
    <div div className="container">
      <div className="sort-bar">
        <Link href={`/category/house`}>
          <i className="fa-solid fa-house-chimney"></i>
          <p>House</p>
        </Link>
        <div>
          <i className="fa-solid fa-snowflake"></i>
          <p>Artic</p>
        </div>
        <div>
          <i className="fa-solid fa-rocket"></i>
          <p>Space</p>
        </div>
        <div>
          <i className="fa-solid fa-tree"></i>
          <p>Trees</p>
        </div>
        <Link href={"/category/city"}>
          <i className="fa-solid fa-building"></i>
          <p>City</p>
        </Link>
        <div>
          <i className="fa-solid fa-campground"></i>
          <p>Camping</p>
        </div>
        <div>
          <i className="fa-solid fa-umbrella-beach"></i>
          <p>Beach</p>
        </div>
        <div>
          <i className="fa-solid fa-volleyball"></i>
          <p>Games</p>
        </div>
      </div>
    </div>
  )
}

export default NavEnd