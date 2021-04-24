import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";




export default function Navbar() {
  return (
    <header className="nav-background">
      <div className="container mx-auto flex justify-between">
        <nav activeClassName="text-white" classname="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-3 px-6 mr-4 text-red-100 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest"
          >
            Tyler Antoni
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white nav-links"
            activeClassName="text-color-100 bg-yellow-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white nav-links"
            activeClassName="text-color-100 bg-yellow-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white nav-links"
            activeClassName="text-color-100 bg-yellow-400"
          >
            About me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/Dibble710"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35,  }}
          />
          <SocialIcon
            url="https://twitter.com/AirJordan1025"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/tyler.antoni/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
