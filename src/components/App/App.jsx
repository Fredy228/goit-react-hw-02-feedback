import {Container, Section, Title} from './App.styled';
import {Feedback} from '../Feedback/Feedback'
import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render () {
    return (
      <Container>
        <Section>
          <Title>Please leave feedback</Title>
          <Feedback/>
        </Section>
        <Section>
          <Title>Statictics</Title>
        </Section>
        
      </Container>
    );
  }
};

export default App;
