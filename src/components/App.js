import React, { useState } from "react";

const naturalNotes = ["A", "B", "C", "D", "E", "F", "G"];

const shapes = ["C", "A", "G", "E", "D"];

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const getRandomNote = () => getRandomItem(naturalNotes);

const getRandomShape = () => getRandomItem(shapes);

export const App = () => {
  const [root, setRoot] = useState(getRandomNote());
  const [shape, setShape] = useState(getRandomShape());

  return (
    <>
      <h1>
        Play a {root} major chord with the {shape} shape
      </h1>
      <button
        onClick={() => {
          setRoot(getRandomNote);
          setShape(getRandomShape);
        }}
      >
        Another!
      </button>
    </>
  );
};
