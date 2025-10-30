// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2f1, #f7fdfb)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="#024553"
          gutterBottom
        >
          🌿 Welcome to <span style={{ color: "#009688" }}>Prakriti App</span>
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth="600px"
          mx="auto"
          mb={4}
        >
          Discover your Ayurvedic body type (Prakriti), track your wellness
          journey, and get personalized lifestyle & diet suggestions for better
          health.
        </Typography>

        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#009688",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 3,
            boxShadow: 3,
            "&:hover": { backgroundColor: "#00796b" },
          }}
        >
          Go to Dashboard
        </Button>
      </motion.div>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <HealthAndSafetyIcon fontSize="large" color="success" />,
              title: "Personal Health Tracking",
              desc: "Keep track of your daily health habits, mood, and energy levels.",
            },
            {
              icon: <EmojiNatureIcon fontSize="large" color="success" />,
              title: "Prakriti Quiz",
              desc: "Discover your body type (Vata, Pitta, Kapha) and get insights.",
            },
            {
              icon: <DashboardIcon fontSize="large" color="success" />,
              title: "Smart Dashboard",
              desc: "Access your personalized recommendations, diet chart, and more.",
            },
          ].map((card, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    height: "100%",
                    background: "white",
                  }}
                >
                  <Box sx={{ mb: 2 }}>{card.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" color="#024553">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {card.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box mt={8}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Prakriti App | Wellness Redefined 🌱
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
