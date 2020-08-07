import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  

  return (
    <header className="bg-blue-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-2 mx-auto md:p-4">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            
            <span className="text-xl font-bold tracking-tight">
              Login 
            </span>
          </h1>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/home`,
              title: `Home`,
            },
            {
              route: `/about`,
              title: `About`,
            },

            {
              route: `/signin`,
              title: `Sign In`,
            },

            {
              route: `/signup`,
              title: `Sign Up`,
            },
            

          ].map((link) => (
            <a
              key={link.title}
            >
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              
              to={link.route}
            >
              {link.title}
              </Link>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
