import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Paper, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { path: "/" },
  { title: "Login", path: "/login" },
  { title: "Signup", path: "/signup" },
  { title: "Cart", path: "/cart" },
  // { title: "About Us", path: "/aboutus" },
  // { title: "Contact", path: "/contact" },
];

const categories = [
  { title: "Furniture", items: ["Beds", "Tables", "Chairs", "Wardrobes"] },
  { title: "Home Decor", items: ["Wall Art", "Clocks", "Vases", "Curtains"] },
  { title: "Sofas & Seating", items: ["Sofas", "Recliners", "Bean Bags", "Ottomans"] },
  { title: "Mattress", items: ["Single", "Double", "Queen Size", "King Size"] },
  { title: "Lamps & Lighting", items: ["Table Lamps", "Ceiling Lights", "Floor Lamps", "Wall Lights"] },
];

const Layout = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          {/* Mobile Menu */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: "block", md: "none" } }} onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>

          {/* Brand Name */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>Pepperfry</Link>
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navLinks.map((item) => (
              <Button key={item.title} color="inherit" component={Link} to={item.path}>
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List>
          {navLinks.map((item) => (
            <ListItem button key={item.title} component={Link} to={item.path} onClick={() => setMobileOpen(false)}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Category Menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          padding: "10px 0",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          flexWrap: "wrap",
        }}
      >
        {categories.map((category) => (
          <Box
            key={category.title}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            sx={{
              position: "relative",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              color: hoveredCategory?.title === category.title ? "#ff6600" : "black",
              transition: "color 0.2s ease",
              "&:hover": { color: "#ff6600" },
            }}
          >
            {category.title}

            {/* Dropdown */}
            {hoveredCategory?.title === category.title && (
              <Paper
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "10px 0",
                  minWidth: "150px",
                  zIndex: 1000,
                }}
              >
                {category.items.map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      sx={{
                        display: "block",
                        padding: "8px 16px",
                        "&:hover": { backgroundColor: "#f5f5f5" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Paper>
            )}
          </Box>
        ))}
      </Box>

      {/* Page Content */}
      {/* <Box sx={{ padding: "24px 16px" }}>
        <Typography variant="h4">Welcome to Pepperfry!</Typography>
      </Box> */}
    </>
  );
};

export default Layout;
