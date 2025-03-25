import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const HomeNavbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="sm:w-[970px] max-w-[90%] mx-auto ">
        <div className="flex items-center justify-center gap-6 my-4">
          <NavLink to="/">
            <button className="px-9 text-xl py-2 text-white bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
              Html
            </button>
          </NavLink>
          <NavLink to="/cssquiz">
            <button className="px-9 text-xl py-2 text-white bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
              Css
            </button>
          </NavLink>
          <NavLink to="/jsquiz">
            <button className="px-9 text-xl py-2 text-white bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
              JavaSript
            </button>
          </NavLink>
          <NavLink to="/reactquiz">
            <button className="px-9 text-xl py-2 text-white bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
              ReactJS
            </button>
          </NavLink>
          <NavLink to="/frontendquiz">
            <button className="px-9 text-xl py-2 text-white bg-blue-600 rounded hover:bg-blue-500 cursor-pointer">
              Front-end
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeNavbar;
