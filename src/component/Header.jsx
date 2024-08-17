

const Header = () => {
  return (
    <div>
      <div>
  <header
    className="sticky top-0 z-20 bg-white"
    style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08))' }}
  >
    <div className="container flex gap-6 py-4 m-auto">
      <div className="flex items-center flex-1 gap-4 md:gap-8">
        <span className="md:w-[120px] w-[70px]">
          <a className="text-4xl font-bold" href="/">
             UniFilter
          </a>
        </span>
        <div className="hidden w-full  px-4 md:flex">
          <div className="w-full">
            <div className="max-w-[719px] relative">
              <div className="flex w-full overflow-hidden rounded-md">
                <div className="relative flex-1 border">
                  <input
                    className="block w-full p-3 pl-4 outline-none bg-black1"
                    placeholder="Search in Evaly"
                    autoComplete="off"
                    value=""
                  />
                </div>
                <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
       
        <a
          className="inline-flex cursor-pointer items-center text-base justify-center h-full md:w-[120px] gap-2 md:hover:border rounded-md transition-colors md:hover:bg-gray-50"
          href="/auth/login"
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
            <path
              d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
            ></path>
          </svg>
          <span className="hidden md:inline-block">Sign in</span>
          <span className="sr-only">Sign in</span>
        </a>
      </div>
    </div>
    <div className="container mx-auto">
      <div className="flex w-full md:hidden">
        <div className="w-full">
          <div className="max-w-[719px] relative">
            <div className="flex w-full overflow-hidden rounded-md">
              <div className="relative flex-1">
                <input
                  className="block w-full p-3 pl-4 outline-none bg-black1"
                  placeholder="Search in Evaly"
                  autoComplete="off"
                  value=""
                />
              </div>
              <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black4">
                Search
              </button>
            </div>
          </div>
        </div>
        <br className="block md:hidden" />
      </div>
      <hr className="hidden border-gray-100 md:block" />
      <div className="container justify-between hidden m-auto md:flex">
        <ul className="flex gap-6 overflow-auto hide-scrollbar">
          <li className="py-4 px-1 ">
            <a
              className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap"
              href="/"
            >
              <i className="text-xl group-hover:hidden ri-home-2-line"></i>
              <i className="text-xl hidden group-hover:block ri-home-2-fill"></i>
              <p className="text-base font-semibold">Home</p>
            </a>
          </li>
          <li className="py-4 px-1 ">
            <a
              className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap"
              href="/shops"
            >
              <i className="text-xl group-hover:hidden ri-store-2-line"></i>
              <i className="text-xl hidden group-hover:block ri-store-2-fill"></i>
              <p className="text-base font-semibold">Shops</p>
            </a>
          </li>
          <li className="py-4 px-1 ">
            <a
              className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap"
              href="/categories"
            >
              <i className="text-xl group-hover:hidden ri-file-list-line"></i>
              <i className="text-xl hidden group-hover:block ri-file-list-fill"></i>
              <p className="text-base font-semibold">Categories</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</div>

    </div>
    // <div>
    //   <header className="sticky top-0 z-20 bg-white" style="filter:drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08))"><div className="container flex gap-6 py-4 m-auto"><div className="flex items-center flex-1 gap-4 md:gap-8"><span className="md:w-[120px] w-[70px]"><a href="/"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.71 94.83"><title>Evaly</title>
    //   <path d="M18.52 74.25c-.33-6.72.81-5.88 11.15-6.14 8.92-.22 15.15-.31 25.47-4.77C66 58.63 63.7 52.56 63.7 36.48S45.15 22.81 26.31 22.81 0 31.08 0 47.7s.18 28.18.18 28.18c0 11.93 3.46 16.82 23.27 18.6s40.4-4.93 40.4-4.93V72.06c-12.51 6.12-44.91 10.01-45.33 2.19Zm.42-27.88c0-6.89 3.09-10.37 11-10.37s15.6-1 15.6 5.69 1 9.25-3.57 11.21a22.87 22.87 0 0 1-10.63 2c-12.98-.01-12.4-8.53-12.4-8.53ZM176 44.31c.32 6.59-.8 5.77-10.93 6-8.74.21-14.85.31-25 4.67-10.69 4.61-8.39 10.56-8.39 26.33s18.25 13.39 36.68 13.39 25.8-8.06 25.8-24.36-.16-27.62-.16-27.62c0-11.68-3.39-16.5-22.82-18.28s-31.85 4.1-31.85 4.1v17.19c12.26-6 36.3-9.09 36.67-1.42Zm-.38 27.34c0 6.8-3.06 10.17-10.77 10.17s-15.3 1-15.3-5.58-1-9.06 3.5-11a22.5 22.5 0 0 1 10.42-2c12.69 0 12.15 8.35 12.15 8.35ZM85.94 94.81c-.93 0-1.64-1.28-2.14-3.73l-16-64.44a7.72 7.72 0 0 1-.23-1.66c0-.87.33-1.3 1-1.3h17.37c1 0 1.7 1.22 2.2 3.67l10.8 45.23 10.89-45.23c.46-2.45 1.17-3.67 2.14-3.67h17.43c.62 0 .93.43.93 1.3a7.72 7.72 0 0 1-.23 1.66L114.16 91.1c-.5 2.49-1.23 3.73-2.2 3.73ZM204.72 0h17.37c1 0 1.45 1 1.45 3v88.88c0 2-.46 3-1.39 3h-17.43c-1 0-1.45-1-1.45-3V2.95c0-1.97.48-2.95 1.45-2.95ZM231.37 72.81c2 .71 3.89 1.45 5.84 2.08a78 78 0 0 0 27.45 3.94 27.28 27.28 0 0 0 6.45-1.32 3.52 3.52 0 0 0 2.54-3.92 12 12 0 0 0-.08-1.69c-.21-2.29-1-3.09-3.36-3.2-3.6-.18-7.19-.4-10.79-.44a46.52 46.52 0 0 1-21.83-5.35c-3.93-2.11-6.1-5.28-6.22-9.7-.13-5.1 0-10.2-.07-15.3q0-5.24-.08-10.47c0-3.6 1.71-5.44 5.31-5.49h6.41c3.83.06 5.36 1.61 5.37 5.47v20.74a10.87 10.87 0 0 0 .1 1.8 3.65 3.65 0 0 0 2 3c5.76 3 11.77 3.79 17.9 1.42 3.68-1.42 5.53-4 5.43-7.65-.18-6.49-.06-13-.05-19.47a7.9 7.9 0 0 1 .23-2.11 3.63 3.63 0 0 1 3.38-3 83.72 83.72 0 0 1 9.1-.1c2.92.17 4.31 1.9 4.31 4.84v19.92q0 15-.19 30.05a31.81 31.81 0 0 1-.54 6 11.4 11.4 0 0 1-8.63 9.15 73 73 0 0 1-23.8 2.63c-8.63-.49-17-2.5-25.25-4.71a1.16 1.16 0 0 1-1.1-1.18V73.11a1.24 1.24 0 0 1 .17-.3Z"></path></svg></a></span><div className="hidden w-full px-4 md:flex"><div className="w-full"><div className=" max-w-[719px] relative"><div className="flex w-full overflow-hidden rounded-md"><div className="relative flex-1"><input className="block w-full p-3 pl-4 outline-none bg-black1" placeholder="Search in Evaly" autoComplete="off" value=""/></div><button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black4">Search</button></div></div></div></div></div><div className="flex items-center gap-4 "><a className="relative border border-[#fff] md:hover:border md:hover:border-gray-200 rounded-md transition-colors md:hover:bg-gray-50 outline-1 outline-gray-500 p-1" href="/orders/create"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className="sr-only">Cart</span></a><a className="inline-flex cursor-pointer items-center text-base justify-center h-full md:w-[120px] gap-2 md:hover:border rounded-md transition-colors md:hover:bg-gray-50" href="/auth/login"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg><span className="hidden md:inline-block">Sign in</span><span className="sr-only">Sign in</span></a></div></div><div className="container mx-auto"><div className="flex w-full md:hidden"><div className="w-full"><div className=" max-w-[719px] relative"><div className="flex w-full overflow-hidden rounded-md"><div className="relative flex-1"><input className="block w-full p-3 pl-4 outline-none bg-black1" placeholder="Search in Evaly" autoComplete="off" value=""/></div><button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-black4">Search</button></div></div></div></div><br className="block md:hidden"/></div><hr className="hidden border-gray-100 md:block"/><div className="container justify-between hidden m-auto md:flex"><ul className="flex gap-6 overflow-auto hide-scrollbar"><li className="py-4 px-1 "><a className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap" href="/"><i className="text-xl group-hover:hidden ri-home-2-line"></i><i className="text-xl hidden group-hover:block ri-home-2-fill"></i><p className="text-base font-semibold">Home</p></a></li><li className="py-4 px-1 "><a className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap" href="/shops"><i className="text-xl group-hover:hidden ri-store-2-line"></i><i className="text-xl hidden group-hover:block ri-store-2-fill"></i><p className="text-base font-semibold">Shops</p></a></li><li className="py-4 px-1 "><a className="inline-flex items-center gap-2 text-base text-gray-700 group hover:text-black4 whitespace-nowrap" href="/categories"><i className="text-xl group-hover:hidden ri-file-list-line"></i><i className="text-xl hidden group-hover:block ri-file-list-fill"></i><p className="text-base font-semibold">Categories</p></a></li></ul></div></header>
    // </div>
  );
};

export default Header;