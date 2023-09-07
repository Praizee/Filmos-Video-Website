import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData"
import BlackLogo from "../../assets/5ffffae014844edabd6b8c5c_logo-black.svg"
import DribbleIcon from "../../assets/6000113b522b1655c42d9a2f_dribbble-white.svg"
import PexelsIcon from "../../assets/6007e364b866bac7b02ab79d_pexels-cottonbro-5822369.jpg"
import BehanceIcon from "../../assets/6000113bd9f0ea6ec6a70b89_behance-white.svg"

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
      {/* <div className="navbar-center hidden laptop:flex laptop:mr-[20rem]">
        <ul className="menu-horizontal px-1">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="">
                <NavLink to={item.path} className={({ isActive }) =>
                  isActive ? 'flex min-w-max rounded-none mx-2 pb-[0.3rem] border-b-[3px] px-1 border-[black]' : 'font-medium min-w-max px-1 mx-2'
                }>
                  <span className={item.className}>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div> */}

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

      <div className="navbar-end laptop:mr-[7.5rem] hidden laptop:flex">
        <span className="flex gap-4 p-">
          <a className="hover:bg-black bg-black/10 rounded-full p-4 transition duration-300 ease-linear">
            <img src={DribbleIcon} className="w-full" alt="Dribble icon" />
          </a>

          <a className="hover:bg-black bg-black/10 rounded-full p-4 transition duration-300 ease-linear">
            <img src={DribbleIcon} className="w-full" alt="Dribble icon" />
          </a>

          <a className="hover:bg-black bg-black/10 rounded-full p-4 transition duration-300 ease-linear">
            <img src={DribbleIcon} className="w-full" alt="Dribble icon" />
          </a>
        </span>
      </div>

    </div>

  );
};

export default Navbar;
