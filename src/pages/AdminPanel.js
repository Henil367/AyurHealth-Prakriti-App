// src/pages/AdminPanel.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Divider,
} from "@mui/material";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch stored users (simulating backend)
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userData")) || [];
    setUsers(stored);
  }, []);

  // Delete user
  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem("userData", JSON.stringify(updated));
  };

  // Filter users by name
  const filteredUsers = users.filter((u) =>
    u.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4, bgcolor: "#f9fafc", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" color="#0f4c5a" mb={3}>
        🧑‍💼 Admin Panel
      </Typography>

      <Paper sx={{ p: 3, mb: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" mb={2}>
          Search Users
        </Typography>
        <TextField
          fullWidth
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>

      <Divider sx={{ my: 3 }} />

      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" mb={2}>
          Registered Users
        </Typography>
        {filteredUsers.length === 0 ? (
          <Typography color="text.secondary">
            No users found. Once users complete their profile or quiz, data will appear here.
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Age</b></TableCell>
                <TableCell><b>Health Info</b></TableCell>
                <TableCell><b>Prakriti</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.health}</TableCell>
                  <TableCell>{user.prakriti || "Not Taken"}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(i)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Paper>
    </Box>
  );
};

export default AdminPanel;
