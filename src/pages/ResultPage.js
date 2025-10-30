import React from "react";
import { Container, Card, CardContent, Typography, Button } from "@mui/material";

const ResultPage = ({ prakriti, onRestart }) => {
  const descriptions = {
    vata: "Energetic, creative, and quick-thinking but may feel anxious when imbalanced.",
    pitta: "Determined, intelligent, and strong-willed but can become irritable or overheated.",
    kapha: "Calm, loyal, and nurturing but may feel sluggish or resistant to change when imbalanced.",
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0f4c5a", mb: 2 }}>
            Your Prakriti Type: {prakriti.toUpperCase()}
          </Typography>
          <Typography sx={{ mb: 3 }}>{descriptions[prakriti]}</Typography>

          <Button
            onClick={onRestart}
            variant="contained"
            sx={{
              backgroundColor: "#0f4c5a",
              "&:hover": { backgroundColor: "#136b7a" },
              fontWeight: "bold",
            }}
          >
            Restart Quiz
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ResultPage;
