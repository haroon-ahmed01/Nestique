import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle Drawer for mobile menu
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Login", path: "/login" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* Logo / Brand */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pepperfry
          </Typography>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((item) => (
              <Button key={item.title} color="inherit" component={Link} to={item.path}>
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button (Visible only on small screens) */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (Side Menu) for Mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {navLinks.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton component={Link} to={item.path} onClick={handleDrawerToggle}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Outlet for Page Content */}
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
