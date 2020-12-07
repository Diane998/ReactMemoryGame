import React from 'react';
import { Segment, Header, Divider } from 'semantic-ui-react';

const Score = ({ ships: { score, highScore } }) => {
  return (
    <Segment.Group compact raised>
      <Segment inverted>
        <Header as="h3">Score: {score}</Header>
        <Divider />
        <Header as="h3">High Score: {highScore}</Header>
      </Segment>
    </Segment.Group>
  );
};

export default Score;
