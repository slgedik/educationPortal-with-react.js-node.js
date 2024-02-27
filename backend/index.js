const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
app.use(cors());
const quizQuestions = require('./questions.json');
const fs = require('fs');

app.use(express.json());

// GET endpoint to retrieve questions
app.get('/api/questions', (req, res) => {
  res.json(quizQuestions);
});

// POST endpoint to add a new question
app.post('/api/questions/add', (req, res) => {
  const newQuestion = req.body;
  quizQuestions.push(newQuestion);

  fs.writeFile('./questions.json', JSON.stringify(quizQuestions), (err) => {
    if (err) {
      console.error('Error writing to questions.json:', err);
      res.status(500).send('Error adding question');
    } else {
      res.status(201).send('Question added successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
