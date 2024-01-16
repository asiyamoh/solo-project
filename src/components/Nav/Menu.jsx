import React from "react";
import { useHistory } from "react-router-dom";

function Menu() {
  const history = useHistory();

  const handleLinkClick = (path) => {
    history.push(path);
  };

  return (
    <nav className="bg-accent dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0">
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 hover:outline-none hover:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className="flex items-center justify-between w-full md:w-auto md:order-1 space-x-4"
          id="navbar-user"
        >
          <a className="flex items-center space-x-8 p-4 mt-4 font-medium rounded-lg md:p-0 bg-accent">
            <span
              onClick={() => history.push("/user")}
              className="text-2xl font-bold text-blue-50 hover:text-black hover:bg-blue-50 md:hover:bg-black md:hover:text-white md:p-0 dark:text-blue-50 md:dark:hover:text-white dark:hover:bg-accent dark:hover:text-white md:dark:hover:bg-accent"
            >
              Home
            </span>
            <span
              onClick={() => history.push("/addBoxer")}
              className="text-2xl font-bold text-blue-50 hover:text-black hover:bg-blue-50 md:hover:bg-black md:hover:text-white md:p-0 dark:text-blue-50 md:dark:hover:text-white dark:hover:bg-accent dark:hover:text-white md:dark:hover:bg-accent"
            >
              Add Boxer
            </span>
            <span
              onClick={() => history.push("/searchFighters")}
              className="text-2xl font-bold text-blue-50 hover:text-black hover:bg-blue-50 md:hover:bg-black md:hover:text-white md:p-0 dark:text-blue-50 md:dark:hover:text-white dark:hover:bg-accent dark:hover:text-white md:dark:hover:bg-accent"
            >
              Search
            </span>
            <span
              onClick={() => history.push("/deleteBoxer")}
              className="text-2xl font-bold text-blue-50 hover:text-black hover:bg-blue-50 md:hover:bg-black md:hover:text-white md:p-0 dark:text-blue-50 md:dark:hover:text-white dark:hover:bg-accent dark:hover:text-white md:dark:hover:bg-accent"
            >
              Your Boxers
            </span>
          </a>
        </div>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </nav>
  );
}

export default Menu;
