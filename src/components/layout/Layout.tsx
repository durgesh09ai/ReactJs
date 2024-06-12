import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../../css/Layout.css';

const Layout: React.FC = () => {
    return (
      <div className="layout">
        <Header />
        <main className="content">
        <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

export default Layout;
