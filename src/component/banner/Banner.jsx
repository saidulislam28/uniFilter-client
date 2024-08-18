
const Banner = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://media.istockphoto.com/id/1220068378/photo/made-in-china-cardboard-boxes-with-text-made-in-china-and-chinese-flag-on-the-roller-conveyor.jpg?s=1024x1024&w=is&k=20&c=uEc--6FP6WTqVUyG1sjtwvqK2DMIxIB3T1_9Ss_cUcU="
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Encourage the user to take an action.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
            Experience the best quality with our premium products, designed to meet your everyday needs
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Happy
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg text-purple-500 font-semibold border rounded dark:border-gray-800"
              >
                Campaign
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
