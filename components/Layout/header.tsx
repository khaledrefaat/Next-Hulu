import HomeIcon from '../../assets/home.svg';
import EnergyIcon from '../../assets/energy.svg';
import ValidIcon from '../../assets/valid.svg';
import CardsIcon from '../../assets/cards.svg';
import SearchIcon from '../../assets/search.svg';
import AvatarIcon from '../../assets/avatar.svg';
import HeaderItem from './headerItem';

const Header = () => {
  return (
    <header
      className="px-1 sm:px-2 md:px-4 lg:px-8 py-2 flex justify-between items-center mt-3
    "
    >
      <ul className="flex">
        <HeaderItem title="home" Icon={HomeIcon} />
        <HeaderItem title="energy" Icon={EnergyIcon} />
        <HeaderItem title="verified" Icon={ValidIcon} />
        <HeaderItem title="collections" Icon={CardsIcon} />
        <HeaderItem title="search" Icon={SearchIcon} />
        <HeaderItem title="user" Icon={AvatarIcon} />
      </ul>
      <h1 className="text-4xl font-black text-white font-sans">hulu</h1>
    </header>
  );
};

export default Header;
