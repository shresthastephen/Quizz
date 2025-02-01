import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="bg-indigo-700 border-b">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <a
                className="flex flex-shrink-0 items-center mr-4"
                href="/index.html"
              >
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  QUIZZPRO
                </span>
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <a
                    href="/about"
                    className="text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    About
                  </a>
                  <a
                    href="/entrance"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Entrance
                  </a>

                  <Link
                    to="/mocktest"
                    className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >
                    Test
                  </Link>

                  <Link
                    to="/signup"
                    className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2"
                  >
                    Sign Up
                  </Link>

                  <Link
                    to="/signin"
                    className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white rounded-md px-3 py-2"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
