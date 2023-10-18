import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " underline font-bold text-base"
              : " font-semibold "
          }
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " underline font-bold text-base"
              : " font-semibold "
          }
          to="/addProduct"
        >
          {" "}
          AddProduct{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " underline font-bold text-base"
              : " font-semibold "
          }
          to="/about"
        >
          {" "}
          About{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " underline font-bold text-base"
              : " font-semibold "
          }
          to="/myCart"
        >
          {" "}
          My Cart{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " underline font-bold text-base"
              : " font-semibold "
          }
          to="/login"
        >
          {" "}
          Login{" "}
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      {" "}
      <div className="navbar bg-[#101b2d] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#101b2d] text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Brand Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/2FCcbGV/user.png" alt="" />
            </div>
          </label>
          <Link>
            <button className="btn btn-sm bg-black text-white">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
