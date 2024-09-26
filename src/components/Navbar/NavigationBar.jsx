import React, { useState } from 'react';
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { AiOutlineMenu} from "react-icons/ai";
import {  IconButton, TextField, InputAdornment } from "@mui/material";

// NavigationBar component
export const NavigationBar = ({ onToggleSidebar }) => {

  
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-100 px-4 lg:h-[60px] lg:px-6">
      {/* Menu button for mobile view */}
      <IconButton edge="start" color="inherit" className="md:hidden" onClick={onToggleSidebar}>
        <AiOutlineMenu />
      </IconButton>

      {/* Search input */}
      <div className="w-full flex-1">
        <form>
          <TextField
            type="search"
            placeholder="Search products..."
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch />
                </InputAdornment>
              ),
            }}
            className="md:w-2/3 lg:w-1/3"
          />
        </form>
      </div>

      {/* Notification Icon */}
      <IconButton edge="end" color="inherit">
        <FiBell />
      </IconButton>

      {/* User Account Icon */}
      <IconButton edge="end" color="inherit">
        <FiUser />
      </IconButton>
    </header>
  );
};
