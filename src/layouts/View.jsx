/* eslint-disable react/function-component-definition */
// react-router-dom
import { Outlet } from "react-router-dom";

// @mui components
import { Box } from "@mui/material";

// components
import Navbar from "../components/Navbar/Navbar";

const View = () => (
  <Box
    sx={{
      minHeight: "100vh",
    }}
  >
    <Navbar />
    <Outlet />
  </Box>
);

export default View;
