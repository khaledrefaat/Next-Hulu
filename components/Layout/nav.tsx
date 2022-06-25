import Link from 'next/link';
import requests from '../../util/requests';

const Nav = () => {
  return (
    <nav className="relative">
      <div className="flex md:justify-evenly items-center py-4 overflow-x-scroll scrollbar-hide md:overflow-x-hidden ">
        {Object.entries(requests).map(([key, { title }]) => (
          <Link href={`/${key === 'trending' ? '' : key}`} key={key}>
            <a>
              <h2 className="mx-2 md:mx-0 lg:text-lg lg:mx-0 last-of-type:pr-8 md:last-of-type:pr-0 cursor-pointer capitalize hover:text-gray-100 hover:scale-110 active:text-red-500 selection:bg-transparent transition-all text-center whitespace-nowrap">
                {title}
              </h2>
            </a>
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-12 w-1/12 bg-gradient-to-l from-[#06202A] md:hidden" />
    </nav>
  );
};

export default Nav;
