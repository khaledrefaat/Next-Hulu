import NavItem from './navItem';

const Nav = () => {
  return (
    <nav className="flex justify-evenly items-center py-4">
      <NavItem>trending</NavItem>
      <NavItem>top rated</NavItem>
      <NavItem>action</NavItem>
      <NavItem>comedy</NavItem>
      <NavItem>horror</NavItem>
      <NavItem>romance</NavItem>
      <NavItem>mystery</NavItem>
      <NavItem>sci-fi</NavItem>
      <NavItem>western</NavItem>
      <NavItem>animation</NavItem>
    </nav>
  );
};

export default Nav;
