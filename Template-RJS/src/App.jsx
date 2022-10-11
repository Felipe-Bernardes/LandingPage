import React from 'react';
import Header  from '../components/Header/Header'
import FirstSection from '../components/SectionOne/FirstSection';
import { Container } from './AppCss'

function App() {
  return (
    <Container>
      <Header></Header>
      <FirstSection></FirstSection>
    </Container>
  )
}

export default App
