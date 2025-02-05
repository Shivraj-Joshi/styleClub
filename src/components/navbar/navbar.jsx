// import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user.email);

  const logout = () => {
    localStorage.removeItem("user");
    // console.log("the user has logged out ");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <div className="bg-white fixed h-16 top-0 z-50 w-full flex items-center justify-evenly p-8 px-4 shadow-xl">
        {/* website logo */}
        <div className="text-lg cursor-pointer hover:text-[#717fe0]">
          {" "}
          <div className="h-[90px] w-[120px] flex items-center justify-center">
            <p className="text-2xl font-semibold text-black">
              WARD
              <span className="text-[#717fe0] font-semibold text-2xl">
                ROBE
              </span>
            </p>
          </div>
        </div>
        {/* website Links */}
        <ul className="hidden md:flex gap-10 text-lg  ">
          <li className="cursor-pointer hover:text-[#717fe0] ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#717fe0] ">
            <NavLink
              to="products"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#717fe0] ">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-[#717fe0] ">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* search field */}
        <div className="hidden md:flex gap-2 ">
          <input type="search" placeholder="search" className="px-4" />
          <button className="p-2 cursor-pointer">search</button>
        </div>
        {/* order field */}
        {user ? (
          <div className="hidden md:flex gap-2 ">
            <NavLink to="/order">
              <button className="p-2 cursor-pointer">Order</button>
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {/* admin field */}
        {user?.user?.email === "iamshivrajjoshi07@gmail.com" ? (
          <NavLink to="/admindashboard">
            <button className="p-2 cursor-pointer">Admin</button>
          </NavLink>
        ) : (
          ""
        )}

        {/* Logout field */}
        {user ? (
          <div className="hidden md:flex gap-2 ">
            <button onClick={logout} className="p-2 cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          <p className="text-lg  cursor-pointer">
            {" "}
            <NavLink to="/login">
              <span className="hover:text-[#717fe0]">Login</span>
            </NavLink>{" "}
            /{" "}
            <NavLink to="/signUp">
              <span className="hover:text-[#717fe0]">SignUp</span>
            </NavLink>
          </p>
        )}

        {/* login / signup field */}

        <div className=" hidden md:flex gap-4">
          {/* Cart field */}
          <div className="relative  hover:text-[#717fe0] text-black px-4 h-10 text-2xl">
            <NavLink to="/cart">cart</NavLink>
            <div className="absolute h-5 w-5 top-0 right-0 bg-[#717fe0] flex items-center justify-center rounded-full text-white text-sm  ">
              {cartItems.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
