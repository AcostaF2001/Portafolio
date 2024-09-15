// Layout.tsx
import React from 'react';
import NavBar from '../Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
