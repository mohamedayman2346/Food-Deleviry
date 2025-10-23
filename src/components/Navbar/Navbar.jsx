import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCountext";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="pt-5 flex flex-col md:flex-row justify-between items-center  px-10">
      {/* Bars && Logo */}
      <div className="logo-bars w-full md:w-fit flex justify-between items-center">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-[150px]" />
        </Link>
        {/* Bars */}
        <div
          className={`md:hidden ${
            isOpen && "border border-tomato "
          } rounded-2xl p-2`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {/* <nav > */}
      {/* Navbar menu */}
      <ul className="md:flex gap-5 text-[#49557e] text-sm hidden">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" && "navbar-active"} cursor-pointer`}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" && "navbar-active"}  cursor-pointer`}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobil")}
          className={`${menu === "mobil" && "navbar-active"}  cursor-pointer`}
        >
          Mobil-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" && "navbar-active"}  cursor-pointer`}
        >
          Contact Us
        </a>
      </ul>
      {/* Navbar right */}
      <div className="md:flex items-center gap-10 hidden ">
        <img
          src={assets.search_icon}
          className="w-[20px] cursor-pointer"
          alt="search icon"
        />
        {/* Navbar Search icon */}
        <div className="relative">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="Basket icon"
              className="w-[20px] cursor-pointer"
            />
          </Link>

          <div
            className={`dot absolute min-w-[10px] min-h-[10px] ${
              getTotalCartAmount() == 0 && "hidden"
            } bg-tomato rounded -top-2 -right-2`}
          ></div>
        </div>
        <button
          className="bg-transparent active:bg-tomato/20 text-primary border-2 py-[10px] px-[30px] rounded-full cursor-pointer border-tomato
          hover:bg-offwite transition"
          onClick={() => setShowLogin(true)}
        >
          Sign In
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-5 mt-5 w-full">
          {/* nav Link */}
          <ul className="flex gap-5 text-[#49557e] text-sm w-full justify-around">
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={`${menu === "home" && "navbar-active"} cursor-pointer`}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={`${
                menu === "menu" && "navbar-active"
              }  cursor-pointer`}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("mobil")}
              className={`${
                menu === "mobil" && "navbar-active"
              }  cursor-pointer`}
            >
              Mobil-app
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact")}
              className={`${
                menu === "contact" && "navbar-active"
              }  cursor-pointer`}
            >
              Contact Us
            </a>
          </ul>

          <div className="flex items-center justify-center gap-20 ">
            <img
              src={assets.search_icon}
              className="w-[20px] cursor-pointer"
              alt="search icon"
            />
            {/* Navbar Search icon */}
            <div className="relative">
              <Link to="/cart">
                <img
                  src={assets.basket_icon}
                  alt="Basket icon"
                  className="w-[20px] cursor-pointer"
                />
              </Link>

              <div
                className={`dot absolute min-w-[10px] min-h-[10px] ${
                  getTotalCartAmount() == 0 && "hidden"
                } bg-tomato rounded -top-2 -right-2`}
              ></div>
            </div>
          </div>

          <button
            className="bg-transparent active:bg-tomato/20 text-primary border-2 py-[10px] px-[30px] rounded-full cursor-pointer border-tomato
          hover:bg-offwite transition"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>

          {/*  */}
        </div>
      )}

      {/* small device */}

      {/* </nav> */}
    </div>
    // 27 minute
  );
}
