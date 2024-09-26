import React from 'react';
import { Button } from '@mui/material';
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FaTruck } from "react-icons/fa";
import { GiCardboardBox } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

export const SidebarComponent = ({ isVisible, toggleSidebar }) => {
  return (
    <div className={`fixed inset-0 z-40 bg-gray-100 transition-transform duration-300 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 md:block border-r md:w-64 h-screen`}>
      <div className="flex flex-col h-full">
        {/* Header with Company Logo and Notification */}
        <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
          <Link className="flex items-center gap-2 font-semibold" to="/">
            {/* Company Logo */}
            <span>THONKET</span>
          </Link>
          {/* Close Button for Mobile */}
          <button onClick={toggleSidebar} className="md:hidden">
            <MdClose className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* Dashboard Link */}
            <Link to="/" onClick={toggleSidebar} className="flex items-center gap-3 pt-4 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary mb-2">
              <AiOutlineHome className="h-4 w-4" />
              Dashboard
            </Link>
            {/* Orders Link */}
            <Link to="/order" onClick={toggleSidebar} className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary mb-2">
              <AiOutlineShoppingCart className="h-4 w-4" />
              Orders
              <div className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold">
                6
              </div>
            </Link>
            {/* Products Link */}
            <Link to="/products" onClick={toggleSidebar} className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary mb-2">
              <GiCardboardBox className="h-4 w-4" />
              Products
            </Link>
            {/* Customers Link */}
            <Link to="/customers" onClick={toggleSidebar} className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary mb-2">
              <AiOutlineUser className="h-4 w-4" />
              Customers
            </Link>
            {/* Customers Link */}
            <Link to="/truck-system" onClick={toggleSidebar} className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-primary mb-2">
              <FaTruck  className="h-4 w-4" />
              Track System
            </Link>
          </nav>
        </div>

        {/* Call to Action - Upgrade to Pro */}
        <div className="p-4 mt-0 sm:mt-[240px]">
          <div className="rounded-lg border bg-white text-gray-800 shadow-sm">
            <div className="flex flex-col space-y-1.5 p-4">
              <h3 className="text-2xl font-semibold">Upgrade to Pro</h3>
              <p className="text-sm text-gray-500">Unlock all features and get unlimited access to our support team.</p>
            </div>
            <div className="p-4 pt-0">
              <Button
                variant="contained"
                color="primary"
                fullWidth
              >
                Upgrade
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
