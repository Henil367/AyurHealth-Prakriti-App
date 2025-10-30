// src/pages/Dashboard.js
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import UserProfile from "./UserProfile";
import PrakritiQuiz from "./PrakritiQuiz";
import ResultPage from "./ResultPage";
import FollowUps from "./FollowUps";
import DietChart from "./DietChart";
import DailySchedule from "./DailySchedule";
import AdminPanel from "./AdminPanel";

const Dashboard = () => {
  const [stage, setStage] = useState("profile");
  const [user, setUser] = useState(null);
  const [prakriti, setPrakriti] = useState(null);

  const handleProfileSave = (data) => {
    setUser(data);
    setStage("quiz"); // move to quiz after saving
  };

  const handleQuizComplete = (result) => {
    setPrakriti(result);
    setStage("result"); // move to result page
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f8fa", minHeight: "100vh", textAlign: "center" }}>
      <Typography variant="h4" color="#024553" fontWeight="bold" mb={3}>
        🌿 Prakriti Wellness Dashboard
      </Typography>

      {/* Show relevant stage */}
      {stage === "profile" && <UserProfile onSave={handleProfileSave} />}
      {stage === "quiz" && <PrakritiQuiz onComplete={handleQuizComplete} />}
      {stage === "result" && <ResultPage prakriti={prakriti} user={user} />}
      {stage === "followups" && <FollowUps />}
      {stage === "diet" && <DietChart />}
      {stage === "schedule" && <DailySchedule />}
      {stage === "admin" && <AdminPanel />}

      {/* Navigation Buttons */}
      {stage !== "profile" && (
        <Box mt={4}>
          <Button onClick={() => setStage("profile")} variant="outlined" sx={{ mx: 1 }}>
            Profile
          </Button>
          <Button onClick={() => setStage("quiz")} variant="outlined" sx={{ mx: 1 }}>
            Quiz
          </Button>
          <Button onClick={() => setStage("result")} variant="outlined" sx={{ mx: 1 }}>
            Result
          </Button>
          <Button onClick={() => setStage("diet")} variant="outlined" sx={{ mx: 1 }}>
            Diet Chart
          </Button>
          <Button onClick={() => setStage("followups")} variant="outlined" sx={{ mx: 1 }}>
            Follow Ups
          </Button>
          <Button onClick={() => setStage("schedule")} variant="outlined" sx={{ mx: 1 }}>
            Daily Schedule
          </Button>
          <Button
            onClick={() => setStage("admin")}
            variant="contained"
            sx={{ mx: 1, bgcolor: "#024553" }}
          >
            Admin Panel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
