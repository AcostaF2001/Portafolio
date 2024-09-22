// Layout.tsx
import React from 'react';
import NavBar from '../Navbar';
import './layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
