import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logout successful"))
      .catch();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="border-b bg-white">
      <div className="navbar max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 justify-between flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-violet-600">
            UniFilter
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
            >
              {/* Hamburger menu icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:w-auto w-full mt-4 md:mt-0">
          <div className="flex items-center gap-2 w-full md:w-auto mb-4 md:mb-0">
            <input
              className="flex-grow p-3 pl-4 outline-none border rounded-l-md"
              placeholder="Search in UniFilter"
              autoComplete="off"
            />
            <button className="p-3 px-5 text-lg font-medium text-white bg-black rounded-r-md">
              Search
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="flex flex-col md:hidden bg-white p-4 rounded-lg shadow-lg mt-2 space-y-4">
              {user && (
                <button
                  onClick={handleLogout}
                  className="font-bold text-lg border p-2 rounded-md border-yellow-400 w-full text-center"
                >
                  Log Out
                </button>
              )}
            </div>
          )}

          {/* Desktop Links */}
          {!menuOpen && (
            <div className="hidden md:flex items-center gap-4 w-full md:w-auto">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="font-bold text-xl border p-2 rounded-md border-yellow-400"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="signIn"
                  className="inline-flex cursor-pointer items-center text-base justify-center h-full md:w-auto gap-2 rounded-md transition-colors hover:bg-gray-50 p-2 border border-transparent hover:border-gray-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                  </svg>
                  <span className="hidden md:inline-block">Sign in</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
