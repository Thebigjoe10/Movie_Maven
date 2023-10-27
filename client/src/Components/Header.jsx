import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilmX from "../assets/img/FilmX logo.jpeg";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAsianOpen, setAsianOpen] = useState(false);
  const [isAfricanOpen, setAfricanOpen] = useState(false);
  const [isGenreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuOpen(!isNavMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleAsianMovie = () => {
    setAsianOpen(!isAsianOpen);
  };

  const toggleAfricanMovie = () => {
    setAfricanOpen(!isAfricanOpen);
  };

  const toggleGenreDropdown = () => {
    setGenreDropdownOpen(!isGenreDropdownOpen);
  };

  return (
    <header className="bg-less-blue shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <button
          onClick={toggleNavMenu}
          className="text-gray-400 lg:hidden block focus:outline-none"
        >
          <svg
            className="fill-current h-6 w-6 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isNavMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </svg>
        </button>

        <Link to="/">
          <div className="flex items-center">
            <img
              className="rounded-full border border-white w-10"
              src={FilmX}
              alt="FilmX logo"
            />
            <h1 className="font-bold text-xl sm:text-2xl">
              <span className="text-slate-100">Film</span>
              <span className="text-slate-50 uppercase text-2xl">X</span>
            </h1>
          </div>
        </Link>

        <form className="bg-transparent p-3 rounded-lg flex items-center relative w-32 sm:w-48">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white outline-none w-full pr-10 rounded-lg"
          />
          <FaSearch className="text-gray-600 absolute right-4 top-1/2 transform -translate-y-1/2" />
        </form>

        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white transform transition-transform ease-in-out duration-300  ${
            isNavMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          <button
            onClick={toggleNavMenu}
            className="text-gray-600 lg:hidden block focus:outline-none"
          >
            <svg
              className="fill-current h-6 w-6 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isNavMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </svg>
          </button>
          <ul className="gap-8 block lg:hidden text-center">
            <Link to={"/"}>
              <li className="mb-6">
                <span className="font-semibold">Home</span>
              </li>
            </Link>
            <ul className="transform group min-w-32">
              <li className="group inline-block mb-6">
                <button
                  onClick={toggleDropdown}
                  className="outline-none focus:outline-none flex items-center min-w-32"
                >
                  <span className="pr-1 font-semibold flex-1">Movies</span>
                  <span>
                    <svg
                      className={`fill-current h-4 w-4 transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      } transition duration-150 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className={`bg-white border rounded-sm transform ${
                    isDropdownOpen ? "scale-100" : "scale-0"
                  } absolute transition duration-150 ease-in-out origin-top min-w-32`}
                >
                  <Link to={"/international"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      International
                    </li>
                  </Link>

                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      onClick={toggleAsianMovie}
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Asian</span>
                      <span className="mr-auto">
                        <svg
                          className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                            isAsianOpen ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className={`bg-white border rounded-sm transform ${
                        isAsianOpen ? "scale-100" : "scale-0"
                      } absolute transition duration-150 ease-in-out origin-top left-0 -ml-32 w-32`}
                    >
                      <Link to={"/bollywood"}>
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Bollywood
                        </li>
                      </Link>
                      <Link to={"/korean"}>
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Korean
                        </li>
                      </Link>
                      <Link to={"/philipines"}>
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Phillippines
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      onClick={toggleAfricanMovie}
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">African</span>
                      <span className="mr-auto">
                        <svg
                          className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                            isAfricanOpen ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      className={`bg-white border rounded-sm transform ${
                        isAfricanOpen ? "scale-100" : "scale-0"
                      } absolute transition duration-150 ease-in-out origin-top w-40`}
                    >
                      <Link to={"/nollywood"}>
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          Nollywood
                        </li>
                      </Link>
                      <Link to={"/south-african"}>
                        <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                          South African
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to={"/chinese-drama"}>
              <li className="mb-6">
                <span className="font-semibold">Chinese Drama</span>
              </li>
            </Link>
            <Link to={"/k-drama"}>
              <li className="mb-6">
                <span className="font-semibold">K-Drama</span>
              </li>
            </Link>
            <Link to={"/tv-series"}>
              <li className="mb-6">
                <span className="font-semibold">TV Series</span>
              </li>
            </Link>

            <ul className="transform group min-w-32">
              <li className="group inline-block mb-6">
                <button
                  onClick={toggleGenreDropdown}
                  className="outline-none focus:outline-none flex items-center min-w-32"
                >
                  <span className="pr-1 font-semibold flex-1">Genres</span>
                  <span>
                    <svg
                      className={`fill-current h-4 w-4 transform ${
                        isGenreDropdownOpen ? "rotate-180" : ""
                      } transition duration-150 ease-in-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  className={`bg-white border rounded-sm transform ${
                    isGenreDropdownOpen ? "scale-100" : "scale-0"
                  } absolute transition duration-150 ease-in-out origin-top min-w-32`}
                >
                  <Link to={"/actions"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Action
                    </li>
                  </Link>
                  <Link to={"/adventure"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Adventure
                    </li>
                  </Link>
                  <Link to={"/animations"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Animation
                    </li>
                  </Link>
                  <Link to={"/biography"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Biography
                    </li>
                  </Link>
                  <Link to={"/comedy"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Comedy
                    </li>
                  </Link>
                  <Link to={"/crime"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Crime
                    </li>
                  </Link>
                  <Link to={"/drama"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Drama
                    </li>
                  </Link>
                  <Link to={"/documentary"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Documentary
                    </li>
                  </Link>
                  <Link to={"/fantasy"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Fantasy
                    </li>
                  </Link>
                  <Link to={"/family"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Family
                    </li>
                  </Link>
                  <Link to={"/horror"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Horror
                    </li>
                  </Link>
                  <Link to={"/music"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Music
                    </li>
                  </Link>

                  <Link to={"/mystery"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Mystery
                    </li>
                  </Link>
                  <Link to={"/romance"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Romance
                    </li>
                  </Link>
                  <Link to={"/sci-fi"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Sci-Fi
                    </li>
                  </Link>
                  <Link to={"/sport"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Sport
                    </li>
                  </Link>
                  <Link to={"/thriller"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      Thriller
                    </li>
                  </Link>
                  <Link to={"/war"}>
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      War
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
            <Link to={"how-to-download"}>
              <li className="mb-6">
                <span className="font-semibold">How to download</span>
              </li>
            </Link>
          </ul>
        </div>
        <ul className="gap-4 hidden lg:flex">
          <Link to={"/"}>
            <li>
              <span className="font-semibold text-slate-100 hover:underline underline-offset-8">Home</span>
            </li>
          </Link>
          <Link to={"/chinese-drama"}>
            <li>
              <span className="font-semibold text-slate-100 hover:underline underline-offset-8">Chinese Drama</span>
            </li>
          </Link>
          <Link to={"/k-drama"}>
            <li>
              <span className="font-semibold text-slate-100 hover:underline underline-offset-8">K-Drama</span>
            </li>
          </Link>
          <Link to={"/tv-series"}>
            <li>
              <span className="font-semibold text-slate-100 hover:underline underline-offset-8">TV Series</span>
            </li>
          </Link>

          <ul className="transform group min-w-32">
            <li className="group inline-block">
              <button
                onClick={toggleDropdown}
                className="outline-none focus:outline-none flex items-center min-w-32"
              >
                <span className="pr-1 font-semibold text-slate-100 hover:underline underline-offset-8  flex-1">Movies</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 text-gray-50 transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className={`bg-white border rounded-sm transform ${
                  isDropdownOpen ? "scale-100" : "scale-0"
                } absolute transition duration-150 ease-in-out origin-top min-w-32`}
              >
                <Link to={"/international"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    International
                  </li>
                </Link>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    onClick={toggleAsianMovie}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">Asian</span>
                    <span className="mr-auto">
                      <svg
                        className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                          isAsianOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className={`bg-white border rounded-sm transform ${
                      isAsianOpen ? "scale-100" : "scale-0"
                    } absolute transition duration-150 ease-in-out origin-top left-0 -ml-32 w-32`}
                  >
                    <Link to={"/bollywood"}>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Bollywood
                      </li>
                    </Link>
                    <Link to={"/korean"}>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Korean
                      </li>
                    </Link>
                    <Link to={"/phillipines"}>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Phillippines
                      </li>
                    </Link>
                  </ul>
                </li>
                <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                  <button
                    onClick={toggleAfricanMovie}
                    className="w-full text-left flex items-center outline-none focus:outline-none"
                  >
                    <span className="pr-1 flex-1">African</span>
                    <span className="mr-auto">
                      <svg
                        className={`fill-current h-4 w-4 transition duration-150 ease-in-out ${
                          isAfricanOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul
                    className={`bg-white border rounded-sm transform ${
                      isAfricanOpen ? "scale-100" : "scale-0"
                    } absolute transition duration-150 ease-in-out origin-top w-40`}
                  >
                    <Link to={"/nollywood"}>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Nollywood
                      </li>
                    </Link>
                    <Link to={"/south-african"}>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        South African
                      </li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="transform group min-w-32">
            <li className="group inline-block">
              <button
                onClick={toggleGenreDropdown}
                className="outline-none focus:outline-none flex items-center min-w-32"
              >
                <span className="pr-1 font-semibold text-slate-100 hover:underline underline-offset-8 flex-1">Genres</span>
                <span>
                  <svg
                    className={`fill-current h-4 w-4 text-gray-50 transform ${
                      isGenreDropdownOpen ? "rotate-180" : ""
                    } transition duration-150 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul
                className={`bg-white border rounded-sm transform ${
                  isGenreDropdownOpen ? "scale-100" : "scale-0"
                } absolute transition duration-150 ease-in-out origin-top min-w-32`}
              >
                <Link to={"/actions"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Action
                  </li>
                </Link>
                <Link to={"/adventure"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Adventure
                  </li>
                </Link>
                <Link to={"/animations"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Animation
                  </li>
                </Link>
                <Link to={"/biography"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Biography
                  </li>
                </Link>
                <Link to={"/comedy"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Comedy
                  </li>
                </Link>
                <Link to={"/crime"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Crime
                  </li>
                </Link>
                <Link to={"/drama"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Drama
                  </li>
                </Link>
                <Link to={"/documentary"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Documentary
                  </li>
                </Link>
                <Link to={"/fantasy"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Fantasy
                  </li>
                </Link>
                <Link to={"/family"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Family
                  </li>
                </Link>
                <Link to={"/horror"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Horror
                  </li>
                </Link>
                <Link to={"/music"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Music
                  </li>
                </Link>
                <Link to={"/mystery"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Mystery
                  </li>
                </Link>
                <Link to={"/romance"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Romance
                  </li>
                </Link>
                <Link to={"/sci-fi"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Sci-Fi
                  </li>
                </Link>
                <Link to={"/sport"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Sport
                  </li>
                </Link>
                <Link to={"/thriller"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Thriller
                  </li>
                </Link>
                <Link to={"/war"}>
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    War
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
          <Link to={"/how-to-download"}>
            <li>
              <span className="font-semibold text-slate-100 hover:underline underline-offset-8">How to download</span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
