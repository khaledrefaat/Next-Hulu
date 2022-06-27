import HomeIcon from '../../assets/home.svg';
import EnergyIcon from '../../assets/energy.svg';
import ValidIcon from '../../assets/valid.svg';
import CardsIcon from '../../assets/cards.svg';
import SearchIcon from '../../assets/search.svg';
import AvatarIcon from '../../assets/avatar.svg';
import HeaderItem from './headerItem';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className="px-1 sm:px-2 md:px-4 lg:px-8 py-2 flex flex-col items-center md:flex-row md:justify-between mt-3 3xl:mb-10
    "
    >
      <ul className="flex">
        <Link href="/">
          <a>
            <HeaderItem title="home" Icon={HomeIcon} />
          </a>
        </Link>
        <HeaderItem title="energy" Icon={EnergyIcon} />
        <HeaderItem title="verified" Icon={ValidIcon} />
        <HeaderItem title="collections" Icon={CardsIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="user" Icon={AvatarIcon} />
      </ul>
      <Link href="/">
        <a>
          <h1 className="text-4xl font-black text-white font-sans 3xl:text-6xl">
            hulu
          </h1>
        </a>
      </Link>
    </header>
  );
};

export default Header;
