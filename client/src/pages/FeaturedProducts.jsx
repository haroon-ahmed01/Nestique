import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import CeilingLamp from '../assets/images/Ceiling-lamp.jpg';
import DiningTable from '../assets/images/Dining-table.jpg';
import ModernSofa from '../assets/images/Modern-sofa.jpg';
import carpets from '../assets/images/Carpets.jpg';
import curtains from '../assets/images/curtains.jpg';
import chair from '../assets/images/chair.jpg';


const featuredProducts = [
  {
    id: 1,
    title: 'Living Room',
    products: [
      { id: 1, name: "Modern Sofa", image: ModernSofa },
      { id: 2, name: "Dining Table", image: DiningTable },
      { id: 3, name: "Carpets", image: carpets },
      { id: 4, name: "Ceiling Lamp", image: CeilingLamp },
      { id: 5, name: "Curtains", image: curtains},
      { id: 6, name: "chair", image: chair },

    ]
  },
  {
    id: 2,
    title: 'Bed Room',
    products: [
      { id: 7, name: "King Size Bed", image: ModernSofa },
      { id: 8, name: "Wardrobe", image: DiningTable },
      { id: 9, name: "Night Lamp", image: CeilingLamp },
    ]
  },
  {
    id: 3,
    title: 'Dining Room',
    products: [
      { id: 10, name: "Wooden Dining Table", image: DiningTable },
      { id: 11, name: "Chair Set", image: ModernSofa },
      { id: 12, name: "Pendant Light", image: CeilingLamp },
    ]
  },
  {
    id: 4,
    title: 'Study Room',
    products: [
      { id: 13, name: "Wooden Dining Table", image: DiningTable },
      { id: 14, name: "Chair Set", image: ModernSofa },
      { id: 15, name: "Pendant Light", image: CeilingLamp },
    ]
  },
  {
    id: 5,
    title: 'Luxuary Furniture',
    products: [
      { id: 16, name: "Wooden Dining Table", image: DiningTable },
      { id: 17, name: "Chair Set", image: ModernSofa },
      { id: 18, name: "Pendant Light", image: CeilingLamp },
    ]
  }
];

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(featuredProducts[0]); // Default category

  return (
    <Box sx={{ padding: "40px 20px", textAlign: "center" }}>
      {/* Heading */}
      <Typography variant="h6" gutterBottom sx={{ padding: "10px 0", fontWeight: "bold" }}>
        Shop All Things Home
      </Typography>

      {/* Category Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 2,
        }}
      >
        {featuredProducts.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            sx={{
              backgroundColor: selectedCategory.id === category.id ? "#1e293b" : "#fff",
              color: selectedCategory.id === category.id ? "#fff" : "#0d172a",
              borderRadius: "1.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              padding: "1rem 1.6rem",
              transition: "all 0.1s cubic-bezier(.4, 0, .2, 1)",
              boxShadow: "0px 1px 2px rgba(166, 175, 195, 0.25)",
              "&:hover": {
                backgroundColor: "#1e293b",
                color: "#fff",
              }
            }}
          >
            {category.title}
          </Button>
        ))}
      </Box>

      {/* Selected Category Products */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        {selectedCategory.products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 300, margin: "auto", boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
