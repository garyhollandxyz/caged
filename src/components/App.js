import React, { useState, useEffect } from 'react'
// import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import { Button, Container, Header } from 'semantic-ui-react'
const naturalNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const shapes = ['C', 'A', 'G', 'E', 'D']

const getRandomItem = array => array[Math.floor(Math.random() * array.length)]

const getRandomNote = () => getRandomItem(naturalNotes)

const getRandomShape = () => getRandomItem(shapes)

const getIndefiniteArticle = noteName =>
  ['A', 'E', 'F'].some(note => note === noteName) ? 'an' : 'a'

const ImportantBit = ({ text }) => (
  <span style={{ fontSize: '2rem' }}>{text}</span>
)

export const App = () => {
  const [root, setRoot] = useState(getRandomNote())
  const [shape, setShape] = useState(getRandomShape())
  const [indefiniteArticle, setIndefiniteArticle] = useState(
    getIndefiniteArticle(root)
  )

  useEffect(() => {
    setIndefiniteArticle(getIndefiniteArticle(root))
  }, [root])
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Header as="h1" content="CAGED practice" />
      <p> Play {indefiniteArticle} </p>
      <p>
        <ImportantBit text={root} />
      </p>
      <p>chord using the</p>
      <p>
        <ImportantBit text={shape} />
      </p>
      <p>shape</p>

      <Button
        content="Another!"
        variant="contained"
        color="primary"
        onClick={() => {
          setRoot(getRandomNote)
          setShape(getRandomShape)
        }}
      />
    </Container>
  )
}
