import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import NavBar from "../Components/NavBar";

const NavLinkLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default NavLinkLayout;
