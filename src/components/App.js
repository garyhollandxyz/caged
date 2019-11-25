import React, { useState } from "react";
import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
const naturalNotes = ["A", "B", "C", "D", "E", "F", "G"];

const shapes = ["C", "A", "G", "E", "D"];

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const getRandomNote = () => getRandomItem(naturalNotes);

const getRandomShape = () => getRandomItem(shapes);

export const App = () => {
  const [root, setRoot] = useState(getRandomNote());
  const [shape, setShape] = useState(getRandomShape());

  return (
    <Container>
      <Paper>
        <Typography variant="h1" component="h1">
          CAGED practice app
        </Typography>
        <Box variant="">
          <Typography variant="body1">
            Play a {root} chord using a {shape} shape
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setRoot(getRandomNote);
            setShape(getRandomShape);
          }}
        >
          Another!
        </Button>
      </Paper>
    </Container>
  );
};
