import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Chip,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FavoriteIcon from "@mui/icons-material/Favorite";

const dietData = {
  vata: {
    title: "Vata Balancing Diet 🌀",
    description:
      "Vata types benefit from warm, moist, and grounding foods to balance air and space elements.",
    foods: [
      "Warm soups and stews",
      "Cooked grains (rice, oats)",
      "Sweet fruits (mango, banana, berries)",
      "Ghee and olive oil",
      "Herbal teas with ginger or cinnamon",
    ],
    avoid: [
      "Cold or raw foods",
      "Dry snacks",
      "Caffeine",
      "Carbonated drinks",
      "Excess spicy food",
    ],
  },
  pitta: {
    title: "Pitta Balancing Diet 🔥",
    description:
      "Pitta types should focus on cooling, hydrating foods to calm the fire and heat within.",
    foods: [
      "Fresh fruits (melons, apples, pears)",
      "Coconut water and milk",
      "Green vegetables",
      "Barley and basmati rice",
      "Mint, fennel, and coriander",
    ],
    avoid: [
      "Spicy, salty, and fried foods",
      "Tomatoes, onions, garlic",
      "Coffee and alcohol",
      "Fermented foods",
    ],
  },
  kapha: {
    title: "Kapha Balancing Diet 🌿",
    description:
      "Kapha types do best with light, warming, and stimulating foods to balance earth and water.",
    foods: [
      "Steamed or grilled vegetables",
      "Spices like turmeric and ginger",
      "Light grains (millet, quinoa)",
      "Warm herbal teas",
      "Fruits like apples and pomegranates",
    ],
    avoid: [
      "Dairy products",
      "Cold drinks and sweets",
      "Heavy oily foods",
      "Fried items",
    ],
  },
};

const DietChart = () => {
  const [prakriti, setPrakriti] = useState("vata");

  const current = dietData[prakriti];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Card
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
          background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#0f4c5a",
            textAlign: "center",
          }}
        >
          Personalized Diet Chart
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 4, color: "gray" }}>
          Select your Prakriti type to see food recommendations.
        </Typography>

        {/* Prakriti Selector */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            color="primary"
            value={prakriti}
            exclusive
            onChange={(e, value) => value && setPrakriti(value)}
            aria-label="prakriti"
          >
            <ToggleButton value="vata">Vata</ToggleButton>
            <ToggleButton value="pitta">Pitta</ToggleButton>
            <ToggleButton value="kapha">Kapha</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Diet Information */}
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
            {current.title}
          </Typography>
          <Typography sx={{ mb: 3, color: "gray" }}>
            {current.description}
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#0f4c5a",
                  }}
                >
                  <RestaurantIcon /> Recommended Foods
                </Typography>
                {current.foods.map((food, index) => (
                  <Chip
                    key={index}
                    label={food}
                    color="success"
                    sx={{ m: 0.5, fontWeight: "bold" }}
                  />
                ))}
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#fff",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#d32f2f",
                  }}
                >
                  <LocalDrinkIcon /> Avoid These
                </Typography>
                {current.avoid.map((food, index) => (
                  <Chip
                    key={index}
                    label={food}
                    color="error"
                    sx={{ m: 0.5, fontWeight: "bold" }}
                  />
                ))}
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <FavoriteIcon color="error" /> Eat mindfully and stay balanced.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DietChart;
