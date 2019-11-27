import React, { useState, useEffect } from "react";
// import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { Button, Container, Header, Checkbox, Form } from "semantic-ui-react";
const naturalNotes = ["A", "B", "C", "D", "E", "F", "G"];
const modifiers = ["♯", "♭", ""];
const shapes = ["C", "A", "G", "E", "D"];
const chordTypes = ["major", "7"];

const standardiseName = name => {
  switch (name) {
    case "E#":
      return "F";
    case "B#":
      return "C";
    case "F♭":
      return "E";
    case "C♭":
      return "B";
    default:
      return name;
  }
};

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const getRandomShape = () => getRandomItem(shapes);

const ImportantBit = ({ text }) => (
  <span style={{ fontSize: "2rem" }}>{text}</span>
);

export const App = () => {
  const getRandomNote = () => {
    const naturalNote = getRandomItem(naturalNotes);
    if (!includeSharpsAndFlats) return standardiseName(naturalNote);
    const modifier = getRandomItem(modifiers);
    const note = `${naturalNote}${modifier}`;
    return standardiseName(note);
  };

  const getRandomChordType = () => {
    if (!includeMinors) return "major";

    return getRandomItem(chordTypes);
  };

  const [includeMinors, setIncludeMinors] = useState(false);
  const toggleMinors = () => setIncludeMinors(!includeMinors);
  const [includeSharpsAndFlats, setIncludeSharpsAndFlats] = useState(true);
  const toggleSharpsAndFlats = () =>
    setIncludeSharpsAndFlats(!includeSharpsAndFlats);
  const [root, setRoot] = useState(getRandomNote());
  const [shape, setShape] = useState(getRandomShape());
  const [chordType, setChordType] = useState(getRandomChordType());

  return (
    <Container style={{ paddingTop: "1rem" }}>
      <Header as="h1" content="CAGED practice" />
      <p> Play </p>
      <p>
        <ImportantBit text={`${root} ${chordType}`} />
      </p>
      <p>with the</p>
      <p>
        <ImportantBit text={shape} />
      </p>
      <p>shape</p>

      <Button
        content="Another!"
        variant="contained"
        primary
        onClick={() => {
          setRoot(getRandomNote);
          setShape(getRandomShape);
          setChordType(getRandomChordType);
        }}
      />
      <Form.Field
        control={Checkbox}
        toggle
        label="Include ♯s and ♭s"
        style={{ marginTop: "1rem" }}
        checked={includeSharpsAndFlats}
        onChange={toggleSharpsAndFlats}
      />
      <Form.Field
        control={Checkbox}
        toggle
        label="Include 7ths"
        style={{ marginTop: "1rem" }}
        checked={includeMinors}
        onChange={toggleMinors}
      />
    </Container>
  );
};
