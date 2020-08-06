import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 ">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 m-auto justify-center flex flex-col md:-mt-20">
        {children}
      </main>

      <footer className="bg-blue-500">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm ">
          <p className="text-white">
            
            by nurrizky imani
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
