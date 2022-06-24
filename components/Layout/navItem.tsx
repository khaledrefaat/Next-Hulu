import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItem {
  children: ReactNode;
}

const NavItem: React.FC<NavItem> = ({ children }) => {
  return (
    <div className="capitalize text-lg cursor-pointer">
      <Link href="/tag/trending">
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default NavItem;
