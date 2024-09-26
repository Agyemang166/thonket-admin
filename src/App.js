import React, { useState } from "react";
import { SidebarComponent } from "./components/Navbar/SidebarComponent";
import { NavigationBar } from "./components/Navbar/NavigationBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from "./pages/Product/Product";
import Orders from './pages/Orders/Orders';
import Dashboard from "./pages/Dashboard/Dashboard";
import Customers from "./pages/Customers/Customers";
import Tracking from "./pages/Trucks/Tracking";

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="flex h-screen">
        <SidebarComponent isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto">
          <NavigationBar onToggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/products" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/truck-system" element={<Tracking />} />
          </Routes>
          {/* Other components or content go here */}
        </div>
      </div>
    </Router>
  );
};

export default App;
