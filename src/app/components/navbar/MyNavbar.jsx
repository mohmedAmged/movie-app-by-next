import Link from 'next/link';

export default function MyNavbar({ pathname }) {
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Next Test
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/dashboard/home"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive('/dashboard/home')
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/about"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive('/dashboard/about')
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/contact"
                className={`block py-2 px-3 rounded md:p-0 ${
                  isActive('/dashboard/contact')
                    ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-blue-500'
                    : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
