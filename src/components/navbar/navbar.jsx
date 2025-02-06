// import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user.user.email);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

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

        {/* hamburgar icon */}
        <div onClick={toggleMenu} className="md:hidden text-2xl ml-28 ">
          <i class="ri-menu-line"></i>
        </div>
        {/* website Links */}
        <ul className="hidden md:flex gap-10 text-lg  ">
          <li className="cursor-pointer text-[14px] uppercase font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] uppercase font-semibold ">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] uppercase font-semibold ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] uppercase font-semibold ">
            <NavLink
              to="/contact"
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
          <button className="p-2 cursor-pointer">
            <i class="ri-search-2-line text-black text-2xl"></i>
          </button>
        </div>
        {/* order field */}
        {user ? (
          <div className="hidden md:flex gap-2 ">
            <NavLink to="/order">
              <button className="p-2 cursor-pointer ">
                <i class="ri-shopping-bag-2-fill text-2xl hover:text-[#717fe0]"></i>
              </button>
            </NavLink>
          </div>
        ) : (
          ""
        )}

        {/* admin field */}
        {user?.user?.email === "iamshivrajjoshi07@gmail.com" ? (
          <NavLink to="/admindashboard">
            <button className="hidden md:flex justify-center items-center p-2 cursor-pointer uppercase font-semibold text-[14px] hover:text-[#717fe0]">
              Admin
              <i class="ri-admin-line ml-2 text-2xl "></i>
            </button>
          </NavLink>
        ) : (
          ""
        )}

        {/* Logout field */}
        {user ? (
          <div className="hidden md:flex gap-2 ">
            <button onClick={logout} className="p-2 cursor-pointer">
              <i class="ri-logout-box-r-line text-2xl hover:text-[#ff2020]"></i>
            </button>
          </div>
        ) : (
          <p className="text-lg hidden md:flex  cursor-pointer">
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
            <NavLink to="/cart">
              <i class="ri-shopping-cart-2-fill text-2xl"></i>
            </NavLink>
            <div className="absolute h-5 w-5 top-0 right-0 bg-[#717fe0] flex items-center justify-center rounded-full text-white text-sm  ">
              {cartItems.length}
            </div>
          </div>
        </div>
      </div>
      {/* menu for mobile screen */}
      {isOpen ? (
        <ul className="flex-col md:hidden gap-6 mt-18 text-lg text-center  ">
          <li className="cursor-pointer text-[14px] py-2 uppercase font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] py-2 uppercase font-semibold ">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] py-2 uppercase font-semibold ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li className="cursor-pointer text-[14px] py-2 uppercase font-semibold ">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#717fe0]" : "text-black"
              }
            >
              Contact
            </NavLink>
          </li>
          {/* Logout field */}
          {user ? (
            <div className="flex md:hidden gap-2 justify-center ">
              <button onClick={logout} className="p-2 cursor-pointer">
                {/* <i class="ri-logout-box-r-line text-2xl hover:text-[#ff2020]"></i> */}{" "}
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

          {user?.user?.email === "iamshivrajjoshi07@gmail.com" ? (
            <NavLink to="/admindashboard">
              <button className="md:hidden md:flex justify-center items-center p-2 cursor-pointer uppercase font-semibold text-[14px] hover:text-[#717fe0]">
                Admin
                <i class="ri-admin-line ml-2 text-2xl "></i>
              </button>
            </NavLink>
          ) : (
            ""
          )}

          <div className=" flex md:hidden justify-center gap-4">
            {/* Cart field */}
            <div className="relative  hover:text-[#717fe0] text-black px-4 h-10 text-2xl">
              <NavLink to="/cart">
                <i class="ri-shopping-cart-2-fill text-2xl"></i>
              </NavLink>
              <div className="absolute h-5 w-5 top-0 right-0 bg-[#717fe0] flex items-center justify-center rounded-full text-white text-sm  ">
                {cartItems.length}
              </div>
            </div>
          </div>
        </ul>
      ) : null}
    </div>
  );
};

export default navbar;
