const Footer = () => {
  return (
    <div className="border-t">
      <footer className="px-4 py-8 max-w-6xl mx-auto">
        <div className="container flex flex-col sm:flex-row flex-wrap items-center justify-center mx-auto space-y-4 sm:space-y-0 sm:justify-between">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
              <span className="text-violet-600 text-2xl font-bold">UniFilter</span>
            </div>
            <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100024676355421"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100024676355421"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100024676355421"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
