import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border">
      <div className="navbar max-w-6xl mx-auto justify-between">
        <div className="flex">
          <Link to="/" className="btn btn-ghost text-2xl font-bold">UniFilter</Link>
        </div>
        <div>
          <ul className="flex gap-5 font-semibold">
            <Link to="/">
            <li>Home</li>
            </Link>
            <li>Categories</li>
            <li>Filter</li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="flex w-full overflow-hidden rounded-md border">
            <div className="relative flex-1">
              <input
                className="block w-full p-3 pl-4 outline-none bg-black1"
                placeholder="Search in UniFilter"
                autoComplete="off"
                
              />
            </div>
            <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black border">
              Search
            </button>
          </div>
          <div className="flex items-center gap-4 ">
            <Link to="signIn"
              className="inline-flex cursor-pointer items-center text-base justify-center h-full md:w-[120px] gap-2 md:hover:border rounded-md transition-colors md:hover:bg-gray-50"
              
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
              <span className="sr-only">Sign in</span>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
