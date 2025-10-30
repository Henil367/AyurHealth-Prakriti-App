import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const FollowUps = () => {
  const [followUps, setFollowUps] = useState([
    { id: 1, task: "Morning Yoga Session", date: "2025-11-01", status: "Pending" },
    { id: 2, task: "Doctor Consultation", date: "2025-11-05", status: "Scheduled" },
  ]);

  const [newFollowUp, setNewFollowUp] = useState({ task: "", date: "" });

  const handleAdd = () => {
    if (newFollowUp.task && newFollowUp.date) {
      const newItem = {
        id: Date.now(),
        ...newFollowUp,
        status: "Pending",
      };
      setFollowUps([...followUps, newItem]);
      setNewFollowUp({ task: "", date: "" });
    }
  };

  const handleDelete = (id) => {
    setFollowUps(followUps.filter((item) => item.id !== id));
  };

  const handleStatusToggle = (id) => {
    setFollowUps(
      followUps.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Pending" ? "Completed" : "Pending",
            }
          : item
      )
    );
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: "bold", color: "#0f4c5a" }}
          >
            Follow-Ups & Progress Tracker
          </Typography>

          <Typography sx={{ mb: 3, color: "gray" }}>
            Track your upcoming health activities, appointments, and routines.
          </Typography>

          {/* Add new follow-up */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              mb: 3,
            }}
          >
            <TextField
              label="Follow-Up Task"
              variant="outlined"
              fullWidth
              value={newFollowUp.task}
              onChange={(e) =>
                setNewFollowUp({ ...newFollowUp, task: e.target.value })
              }
            />
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={newFollowUp.date}
              onChange={(e) =>
                setNewFollowUp({ ...newFollowUp, date: e.target.value })
              }
            />
            <Button
              variant="contained"
              onClick={handleAdd}
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                backgroundColor: "#0f4c5a",
                "&:hover": { backgroundColor: "#136b7a" },
                fontWeight: "bold",
                px: 3,
              }}
            >
              Add
            </Button>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* Follow-up List */}
          <List>
            {followUps.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  mb: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  padding: 2,
                  boxShadow: 1,
                  backgroundColor:
                    item.status === "Completed" ? "#e7f8ee" : "#fff",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "scale(1.01)",
                  },
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => handleDelete(item.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.task}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "gray" }}>
                      📅 {item.date}
                    </Typography>
                  }
                />
                <Chip
                  label={item.status}
                  color={item.status === "Completed" ? "success" : "warning"}
                  onClick={() => handleStatusToggle(item.id)}
                  sx={{ cursor: "pointer" }}
                />
              </ListItem>
            ))}

            {followUps.length === 0 && (
              <Typography sx={{ textAlign: "center", color: "gray", mt: 3 }}>
                No follow-ups yet. Add your first one above!
              </Typography>
            )}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FollowUps;
