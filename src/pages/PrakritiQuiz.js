// src/pages/PrakritiQuiz.js
import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import questions from "../data/prakritiQuestions";

const PrakritiQuiz = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const prakriti = calculatePrakriti(newAnswers);
      onComplete(prakriti);
    }
  };

  const calculatePrakriti = (answers) => {
    const score = { vata: 0, pitta: 0, kapha: 0 };
    answers.forEach((a) => score[a]++);
    return Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
        <Typography variant="h5" mb={3} color="#024553" fontWeight="bold">
          🧘 Prakriti Quiz
        </Typography>
        <Typography variant="h6" mb={2}>
          {questions[current].question}
        </Typography>
        {questions[current].options.map((opt, i) => (
          <Button
            key={i}
            variant="contained"
            onClick={() => handleAnswer(opt.type)}
            sx={{ display: "block", my: 1, width: "100%" }}
          >
            {opt.text}
          </Button>
        ))}
        <Typography variant="body2" color="text.secondary" mt={2}>
          Question {current + 1} of {questions.length}
        </Typography>
      </Paper>
    </Box>
  );
};

export default PrakritiQuiz;
