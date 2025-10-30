import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Chip,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import NightlightIcon from "@mui/icons-material/Nightlight";

const scheduleData = {
  vata: [
    {
      time: "6:00 AM",
      activity: "Wake up early and do gentle yoga or meditation.",
      icon: <WbSunnyIcon color="primary" />,
    },
    {
      time: "7:30 AM",
      activity: "Eat a warm, nourishing breakfast like oatmeal or soup.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "10:00 AM",
      activity: "Work on creative or light mental tasks.",
      icon: <SelfImprovementIcon color="secondary" />,
    },
    {
      time: "1:00 PM",
      activity: "Have your main meal; include rice, ghee, and cooked vegetables.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "6:30 PM",
      activity: "Evening walk or calming tea.",
      icon: <DirectionsRunIcon color="warning" />,
    },
    {
      time: "9:30 PM",
      activity: "Sleep early to balance Vata energy.",
      icon: <NightlightIcon color="action" />,
    },
  ],
  pitta: [
    {
      time: "5:30 AM",
      activity: "Wake up before sunrise and do cooling pranayama (breathing).",
      icon: <WbSunnyIcon color="primary" />,
    },
    {
      time: "8:00 AM",
      activity: "Eat a light breakfast — fruits or porridge.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "12:30 PM",
      activity: "Main meal — favor cooling foods like salads or lentils.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "5:30 PM",
      activity: "Gentle walk or light exercise; avoid heat.",
      icon: <DirectionsRunIcon color="warning" />,
    },
    {
      time: "9:00 PM",
      activity: "Calming herbal tea, journaling, and sleep.",
      icon: <NightlightIcon color="action" />,
    },
  ],
  kapha: [
    {
      time: "5:00 AM",
      activity: "Wake up early and do energizing yoga or brisk exercise.",
      icon: <AccessAlarmIcon color="primary" />,
    },
    {
      time: "7:00 AM",
      activity: "Light breakfast with herbal tea or fruit.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "10:00 AM",
      activity: "Engage in stimulating work or movement.",
      icon: <SelfImprovementIcon color="secondary" />,
    },
    {
      time: "12:30 PM",
      activity: "Eat your main meal — prefer light, spicy foods.",
      icon: <RestaurantIcon color="success" />,
    },
    {
      time: "6:00 PM",
      activity: "Evening walk or mild workout.",
      icon: <DirectionsRunIcon color="warning" />,
    },
    {
      time: "10:00 PM",
      activity: "Sleep after some deep breathing or meditation.",
      icon: <NightlightIcon color="action" />,
    },
  ],
};

const DailySchedule = () => {
  const [prakriti, setPrakriti] = useState("vata");

  const schedule = scheduleData[prakriti];

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Card
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 4,
          background: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
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
          Daily Schedule (Dinacharya)
        </Typography>
        <Typography
          sx={{ textAlign: "center", mb: 4, color: "gray", fontSize: "1.1rem" }}
        >
          Select your Prakriti type to view a personalized daily routine.
        </Typography>

        {/* Prakriti Selector */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            color="primary"
            value={prakriti}
            exclusive
            onChange={(e, value) => value && setPrakriti(value)}
          >
            <ToggleButton value="vata">Vata</ToggleButton>
            <ToggleButton value="pitta">Pitta</ToggleButton>
            <ToggleButton value="kapha">Kapha</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Schedule Timeline */}
        <Grid container spacing={2}>
          {schedule.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              >
                {item.icon}
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#0f4c5a" }}
                  >
                    {item.time}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.activity}
                  </Typography>
                </Box>
              </Card>
              {index < schedule.length - 1 && (
                <Divider sx={{ my: 1 }}>
                  <Chip label="Next" variant="outlined" />
                </Divider>
              )}
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
};

export default DailySchedule;
