"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

function Navbar(props) {
  const routess = [
    {
      name: `home`,
      path: "/",
    },
    {
      name: `About`,
      path: "/about",
    },
    {
      name: `Listings`,
      path: "/listings",
    },
    {
      name: `Services`,
      path: "/services",
    },
    {
      name: `Blogs`,
      path: "/blogs",
    },
    {
      name: `Career`,
      path: "/career",
    },
    {
      name: `Contact`,
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpen = () => setOpen(true);

  const drawer = (
    <div
      onClick={handleDrawerToggle}
      className="flex flex-col items-center justify-center gap-4 pt-10"
    >
      <Link href="/">
        <img src="assets/logo.svg" alt="logo" className="w-auto h-[36px]" />
      </Link>

      <List className="flex flex-col justify-center items-center gap-2 mt-10">
        {routess.map((route, index) => (
          <Link
            key={index}
            className={`font-normal text-lg rounded-[30px] p-3 capitalize ${
              pathname == route.path ? "active" : ""
            }  text-black LinkItem`}
            href={route.path}
          >
            {route.name}
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    props.window !== undefined ? () => props.window().document.body : undefined;

  return (
    <>
      <AppBar
        style={{ backgroundColor: "#ffffff" }}
        className="bg-[#ffffff] flex items-center justify-center "
      >
        <Toolbar className="bg-white w-full lg:w-[80%]">
          <div className="w-full flex justify-between p-3 items-center  ">
            <Link href="/">
              <img src="assets/logo.svg" alt="" className="w-auto " />
            </Link>
            <div className="flex justify-center items-center gap-5">
              <ul className="hidden lg:flex justify-center gap-5 items-center">
                {routess.map((route, index) => (
                  <Link
                    href={route.path}
                    key={index}
                    className={`font-normal text-lg rounded-[30px] p-3 capitalize ${
                      pathname == route.path ? "active" : ""
                    }  text-black LinkItem`}
                  >
                    {route.name}
                  </Link>
                ))}
              </ul>

              <div className="w-[30px] h-[30px] rounded-full hidden lg:flex justify-center items-center">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="black"
                    d="M8.99998 0.709076C4.42689 0.709076 0.709076 4.42689 0.709076 8.99998C0.709076 13.5731 4.42689 17.2909 8.99998 17.2909C13.5731 17.2909 17.2909 13.5731 17.2909 8.99998C17.2909 4.42689 13.5731 0.709076 8.99998 0.709076ZM1.30253 9.29671H4.70617C4.72363 10.5185 4.88072 11.688 5.14253 12.7004H2.24507C1.68653 11.688 1.3549 10.5185 1.30253 9.29671ZM9.29671 4.70617V1.31999C10.4313 1.51199 11.4436 2.82108 12.0545 4.70617H9.29671ZM12.2291 5.29962C12.5083 6.32944 12.6829 7.48144 12.7004 8.70326H9.29671V5.29962H12.2291ZM8.70326 1.31999V4.70617H5.94544C6.5738 2.82108 7.56871 1.51199 8.70326 1.31999ZM8.70326 5.29962V8.70326H5.29962C5.31707 7.48144 5.49162 6.31198 5.77089 5.29962H8.70326ZM4.70617 8.70326H1.30253C1.3549 7.46398 1.68653 6.31198 2.24507 5.29962H5.14253C4.88072 6.32944 4.74108 7.48144 4.70617 8.70326ZM5.29962 9.29671H8.70326V12.7004H5.77089C5.49162 11.688 5.31707 10.5185 5.29962 9.29671ZM8.70326 13.2938V16.68C7.56871 16.488 6.55635 15.1789 5.94544 13.2938H8.70326ZM9.29671 16.68V13.2938H12.0545C11.4262 15.1789 10.4313 16.488 9.29671 16.68ZM9.29671 12.7004V9.29671H12.7004C12.6829 10.5185 12.5083 11.688 12.2291 12.7004H9.29671ZM13.2938 9.29671H16.6974C16.6451 10.536 16.3134 11.688 15.7549 12.7004H12.8574C13.1193 11.6705 13.2589 10.5185 13.2938 9.29671ZM13.2938 8.70326C13.2763 7.48144 13.1193 6.31198 12.8574 5.29962H15.7549C16.3134 6.31198 16.6451 7.48144 16.6974 8.70326H13.2938ZM15.3883 4.70617H12.6829C12.264 3.32726 11.6356 2.22762 10.8851 1.52944C12.7527 2.00071 14.3411 3.15272 15.3883 4.70617ZM7.09743 1.52944C6.34689 2.22762 5.71853 3.32726 5.29962 4.70617H2.59416C3.65889 3.15272 5.24725 2.00071 7.09743 1.52944ZM2.61163 13.2938H5.31708C5.73599 14.6727 6.36435 15.7724 7.1149 16.4705C5.24726 15.9993 3.6589 14.8473 2.61163 13.2938ZM10.9025 16.4705C11.6531 15.7724 12.2814 14.6727 12.7004 13.2938H15.4058C14.3411 14.8473 12.7527 15.9993 10.9025 16.4705Z"
                  />
                </svg>
              </div>
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <img
                src="assets/menu.svg"
                alt=""
                className="lg:hidden w-auto h-auto cursor-pointer z-50"
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </>
  );
}

export default Navbar;
