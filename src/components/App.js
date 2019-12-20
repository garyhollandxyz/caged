import React, { useState, useEffect } from 'react'
// import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import {
  Button,
  Container,
  Header,
  Checkbox,
  Form,
  Grid
} from 'semantic-ui-react'

import { useToggleState } from '../hooks'

const naturalNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const modifiers = ['♯', '♭', '']
const shapes = ['C', 'A', 'G', 'E', 'D']
const chordTypes = ['major', '7']
const scaleTypes = ['major', 'major pentatonic', 'minor pentatonic']

const standardiseName = name => {
  switch (name) {
    case 'E#':
      return 'F'
    case 'B#':
      return 'C'
    case 'F♭':
      return 'E'
    case 'C♭':
      return 'B'
    default:
      return name
  }
}

const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

const getRandomShape = () => getRandomItem(shapes)

const Emphasised = ({ text }) => (
  <span style={{ fontSize: '2rem' }}>{text}</span>
)

export const App = () => {
  const getRandomNote = () => {
    const naturalNote = getRandomItem(naturalNotes)

    const modifier = getRandomItem(modifiers)
    const note = `${naturalNote}${modifier}`
    return standardiseName(note)
  }
  const getAllowedChordTypes = () => {
    const chordTypes = []
    if (includeMajorChords) chordTypes.push('Major chord')
    if (include7thChords) chordTypes.push('7 chord')
    return chordTypes
  }
  const getAllowedScaleTypes = () => {
    const scaleTypes = []
    if (includeMajorScales) scaleTypes.push('Major scale')
    if (includeMajorPentatonicScales) scaleTypes.push('Major penatonic scale')
    if (includeMinorPentatonicScales) scaleTypes.push('Minor pentatonic scale')
    return scaleTypes
  }
  const getRandomChordOrScaleType = () => {
    const chords = getAllowedChordTypes()
    const scales = getAllowedScaleTypes()

    return getRandomItem([...chords, ...scales])
  }

  // Chord types
  const [includeMajorChords, toggleIncludeMajorChords] = useToggleState(true)
  const [include7thChords, toggleInclude7thChords] = useToggleState(false)

  // Scale types
  const [includeMajorScales, toggleIncludeMajorScales] = useToggleState(true)
  const [
    includeMajorPentatonicScales,
    toggleIncludeMajorPentatonicScales
  ] = useToggleState(true)
  const [
    includeMinorPentatonicScales,
    toggleIncludeMinorPentatonicScales
  ] = useToggleState(true)

  const [root, setRoot] = useState(getRandomNote())
  const [shape, setShape] = useState(getRandomShape())

  const [chordOrScaleType, setChordOrScaleType] = useState(
    getRandomChordOrScaleType()
  )

  return (
    <Container style={{ paddingTop: '1rem' }} textAlign="center">
      <Header as="h1" content="CAGED practice" />
      <p> Play </p>
      <p>
        <Emphasised text={`${root} ${chordOrScaleType}`} />
      </p>
      <p>with the</p>
      <p>
        <Emphasised text={shape} />
      </p>
      <p>shape</p>

      <Button
        content="Another!"
        variant="contained"
        primary
        size="large"
        onClick={() => {
          setRoot(getRandomNote)
          setShape(getRandomShape)
          setChordOrScaleType(getRandomChordOrScaleType)
        }}
        disabled={
          !includeMajorChords &&
          !include7thChords &&
          !includeMajorScales &&
          !includeMajorPentatonicScales &&
          !includeMinorPentatonicScales
        }
      />

      <Grid centered>
        <Grid.Column
          textAlign="center"
          width={8}
          style={{
            marginTop: '1rem'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
              marginTop: '1rem'
            }}
          >
            <Header as="h2" content="Chords" />
            <Form.Field
              control={Checkbox}
              toggle
              label="Major"
              style={{
                marginTop: '1rem',
                display: 'inline-block',
                textAlign: 'left'
              }}
              checked={includeMajorChords}
              onChange={toggleIncludeMajorChords}
            />
            <Form.Field
              control={Checkbox}
              toggle
              label="7th"
              style={{ marginTop: '1rem' }}
              checked={include7thChords}
              onChange={toggleInclude7thChords}
            />
          </div>
        </Grid.Column>
        <Grid.Column
          textAlign="center"
          width={8}
          style={{
            marginTop: '1rem'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
              marginTop: '1rem'
            }}
          >
            <Header as="h2" content="Scales" />
            <Form.Field
              control={Checkbox}
              toggle
              label="Major"
              style={{ marginTop: '1rem' }}
              checked={includeMajorScales}
              onChange={toggleIncludeMajorScales}
            />
            <Form.Field
              control={Checkbox}
              toggle
              label="Major pentatonic"
              style={{ marginTop: '1rem' }}
              checked={includeMajorPentatonicScales}
              onChange={toggleIncludeMajorPentatonicScales}
            />
            <Form.Field
              control={Checkbox}
              toggle
              label="Minor pentatonic"
              style={{ marginTop: '1rem' }}
              checked={includeMinorPentatonicScales}
              onChange={toggleIncludeMinorPentatonicScales}
            />
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
