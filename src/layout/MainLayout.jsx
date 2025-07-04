import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[80vh] px-4 md:px-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;