import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setDoubleDropdownOpen] = useState(false);
  const [isAfricanMoviesDropdownOpen, setAfricanMoviesDropdownOpen] =
    useState(false);
  const [isGenreDropdownOpen, setGenreDropdownOpen] = useState(false);

  const toggleAfricanMoviesDropdown = () => {
    setAfricanMoviesDropdownOpen(!isAfricanMoviesDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDoubleDropdown = () => {
    setDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  const toggleGenreDrodown = () => {
    setGenreDropdownOpen(!isGenreDropdownOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <a className="flex items-center">
            <img
              src="https://www.codewithfaraz.com/InstaPic.png"
              className="h-8 mr-3"
              alt="Film X Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Film X
            </span>
          </a>
        </Link>
        <button
          id="navbar-toggle"
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover-bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus-ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full sm:block sm:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 sm:p-0 mt-4 border border-gray-100 rounded-lg sm:flex-row sm-space-x-8 sm:mt-0 sm:border-0 sm-bg-white dark-bg-gray-800 sm-dark-bg-gray-900 dark-border-gray-700">
            <Link to={"/"}>
              <li>
                <a
                  className="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded sm-bg-transparent sm-text-blue-700 sm-p-0 sm-dark-text-blue-500 dark-bg-blue-600 sm-dark-bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </Link>

            <Link to={"/chinese-drama"}>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 dark-text-white sm-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white sm-dark-hover-bg-transparent">
                  Chinese Drama
                </a>
              </li>
            </Link>
            <Link to={"/k-drama"}>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 dark-text-white sm-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white sm-dark-hover-bg-transparent">
                  K-Drama
                </a>
              </li>
            </Link>
            <Link to={"/tv-series"}>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 dark-text-white sm-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white sm-dark-hover-bg-transparent">
                  TV Series
                </a>
              </li>
            </Link>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover-bg-gray-50 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 sm-w-auto dark-text-white sm-dark-hover-text-blue-500 dark-focus-text-white dark-border-gray-700 dark-hover-bg-gray-700 sm-dark-hover-bg-transparent"
                onClick={toggleDropdown}
              >
                Movies
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 transform ${
                    isDropdownOpen ? "rotate-0" : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isDropdownOpen ? "" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700 dark-divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark-text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <Link to={"/international"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        International
                      </a>
                    </li>
                  </Link>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                      onClick={toggleDoubleDropdown}
                    >
                      Asian Movies
                      <svg
                        className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 transform ${
                          isDoubleDropdownOpen ? "rotate-0" : "rotate-180"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="doubleDropdown"
                      className={`z-10 absolute ${
                        isDoubleDropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700 transform translate-x-44`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark-text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <Link to={"/bollywood"}>
                          <li>
                            <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white">
                              Bollywood Movies
                            </a>
                          </li>
                        </Link>
                        <Link to={"/korean"}>
                          <li>
                            <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white">
                              Korean Movies
                            </a>
                          </li>
                        </Link>
                        <Link to={"/phillipines"}>
                          <li>
                            <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white">
                              Phillipines Movies
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                      onClick={toggleAfricanMoviesDropdown}
                    >
                      African Movies
                      <svg
                        className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 transform ${
                          isAfricanMoviesDropdownOpen
                            ? "rotate-0"
                            : "rotate-180"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="doubleDropdown"
                      className={`z-10 absolute ${
                        isAfricanMoviesDropdownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700 transform translate-x-44`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark-text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <Link to={"/nollywood"}>
                          <li>
                            <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-400 dark-hover-text-white">
                              Nollywood Movies
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover-bg-gray-50 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 sm-w-auto dark-text-white sm-dark-hover-text-blue-500 dark-focus-text-white dark-border-gray-700 dark-hover-bg-gray-700 sm-dark-hover-bg-transparent"
                onClick={toggleGenreDrodown}
              >
                Genres
                <svg
                  className={`w-2.5 h-2.5 ml-2.5 transition-transform duration-300 transform ${
                    isGenreDropdownOpen ? "rotate-0" : "rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isGenreDropdownOpen ? "" : "hidden"
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark-bg-gray-700 dark-divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark-text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <Link to={"/actions"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Actions
                      </a>
                    </li>
                  </Link>
                  <Link to={"/adventure"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Adventure
                      </a>
                    </li>
                  </Link>
                  <Link to={"/animations"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Animation
                      </a>
                    </li>
                  </Link>
                  <Link to={"/biography"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Biography
                      </a>
                    </li>
                  </Link>
                  <Link to={"/comedy"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Comedy
                      </a>
                    </li>
                  </Link>
                  <Link to={"/crime"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Crime
                      </a>
                    </li>
                  </Link>
                  <Link to={"/documentary"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Documentary
                      </a>
                    </li>
                  </Link>
                  <Link to={"/drama"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Drama
                      </a>
                    </li>
                  </Link>
                  <Link to={"/family"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Family
                      </a>
                    </li>
                  </Link>
                  <Link to={"/fantasy"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Fantasy
                      </a>
                    </li>
                  </Link>
                  <Link to={"/horror"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Horror
                      </a>
                    </li>
                  </Link>
                  <Link to={"/music"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Music
                      </a>
                    </li>
                  </Link>
                  <Link to={"/mystery"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Mystery
                      </a>
                    </li>
                  </Link>
                  <Link to={"/romance"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Romance
                      </a>
                    </li>
                  </Link>
                  <Link to={"/sci-fi"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Sci-Fi
                      </a>
                    </li>
                  </Link>
                  <Link to={"/sport"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Sport
                      </a>
                    </li>
                  </Link>
                  <Link to={"/thriller"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        Thriller
                      </a>
                    </li>
                  </Link>
                  <Link to={"/war"}>
                    <li>
                      <a className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white">
                        War
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <Link to={"/how-to-download"}>
              <li>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 sm-hover-bg-transparent sm-border-0 sm-hover-text-blue-700 sm-p-0 dark-text-white sm-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white sm-dark-hover-bg-transparent">
                  How to download
                </a>
              </li>
            </Link>
          </ul>
        </div>
        {/* <form className="bg-white p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
           <FaSearch className="text-blue-500" />
        </form> */}
      </div>
    </nav>
  );
}
