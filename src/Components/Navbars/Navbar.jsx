import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import BlackLogo from "../../assets/5ffffae014844edabd6b8c5c_logo-black.svg"

const Navbar = () => {
  const [showNav, setshowNav] = useState(false)

  return (
    <div className="navbar bg-white border-none fixed py-8 top-0 -mt-1 z-[100]">
      <div className="navbar-start laptop:ml-[6.5rem]">
        <a className="leading-[1.5rem] text-black font-black text-[1.5rem]">
          <img className="w-[60%]" src={BlackLogo} alt="web Logo" />
        </a>
      </div>

      {/* displays on wide screen */}
      <div className="navbar-center hidden laptop:flex laptop:mr-[20rem]">
        <ul className="menu-horizontal px-1">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="">
                {/* "flex min-w-max p-4" */}
                <NavLink to={item.path} className={({ isActive }) =>
                  isActive ? 'flex min-w-max rounded-none mx-2 pb-[0.3rem] border-b-[3px] px-1 border-[black]' : 'font-medium min-w-max px-1 mx-2'
                }>
                  <span className={item.className}>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="">
          {/* dropdown */}
          {/* hamburger menu */}
          <label onClick={() => setshowNav(!showNav)}
            tabIndex={0} className="btn btn-ghost laptop:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* end of hamburger menu */}

          {/* mobile navbar */}
          {showNav && <ul tabIndex={0} className="absolute w-[94%] pb-3 p-4 -ml-[18rem] h-auto mt-2 border border-t-2 z-[10] bg-white focus:bg-white rounded-b-box">
            {/* dropdown-content */}
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className="">
                  {/* "flex min-w-max p-4" */}
                  <NavLink to={item.path} className={({ isActive }) =>
                    isActive ? 'flex min-w-max rounded-none font-semibold focus:bg-white p-2 border-b-[3px] border-[black]' : 'flex rounded-none focus:bg-white min-w-max py-2 px-2'
                  }>
                    <span className="">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>}
          {/* end of mobile navbar */}
        </div>
      </div>

      {/* <div className="navbar-end laptop:mr-[7.5rem] hidden laptop:flex">
        <Link to="/login" className="btn bg-white hover:bg-white border-none mr-1 normal-case text-[#010886]">
          Login
        </Link>
        <img src={ } className="ml-0 mr-2" alt="line" />
        <Link to="/signup" className="btn py-2 px-6 normal-case font-bold bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">
          Sign Up
        </Link>
      </div> */}

    </div>

  );
};

export default Navbar;
