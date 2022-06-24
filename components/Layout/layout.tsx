import { ReactNode } from 'react';
import Header from './header';
import Nav from './nav';

interface LayoutProps {
  children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default layout;
