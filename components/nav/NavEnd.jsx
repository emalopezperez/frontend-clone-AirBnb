import Link from "next/link"

const NavEnd = () => {
  return (
    <div div className="container ">
      <div className="flex justify-center gap-3 px-2 m-6 md:px-20 md:gap-40">
        <Link href={ `/` }>
          <i className="fa-solid fa-house-chimney"></i>
          <p>All</p>
        </Link>
        <Link href={ `/category/house` }>
          <i className="fa-solid fa-house-chimney"></i>
          <p>House</p>
        </Link>
        <Link href={ "/category/city" }>
          <i className="fa-solid fa-building"></i>
          <p>City</p>
        </Link>
        <Link href={ "/category/camping" }>
          <i className="fa-solid fa-campground"></i>
          <p>Camping</p>
        </Link>
        <Link href={ "/category/beach" }>
          <i className="fa-solid fa-umbrella-beach"></i>
          <p>Beach</p>
        </Link>

      </div>
    </div>
  )
}

export default NavEnd