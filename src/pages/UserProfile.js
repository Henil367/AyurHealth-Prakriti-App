// src/pages/UserProfile.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const UserProfile = ({ onSave }) => {
  const [form, setForm] = useState({ name: "", age: "", health: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.age) {
      alert("Please fill out all fields!");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("userData")) || [];
    existing.push(form);
    localStorage.setItem("userData", JSON.stringify(existing));

    alert("✅ Profile saved successfully! Starting quiz...");
    onSave(form); // notify Dashboard to start quiz
  };

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#f7f9fb",
        borderRadius: 3,
        maxWidth: 400,
        mx: "auto",
        mt: 4,
      }}
    >
      <Typography variant="h5" mb={2} color="#0f4c5a" fontWeight="bold">
        User Profile
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Age"
          name="age"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Health Info"
          name="health"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, bgcolor: "#0f4c5a" }}
          onClick={handleSubmit}
        >
          Save & Start Quiz
        </Button>
      </Paper>
    </Box>
  );
};

export default UserProfile;
