import React from 'react';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';
import ImageCard from './ImageCard';

const CardList = ({ ships, onShipSelect }) => {
  const cardList = _.shuffle(ships).map((ship, i) => (
    <Grid.Column key={i}>
      <ImageCard onShipSelect={onShipSelect} ship={ship} />
    </Grid.Column>
  ));

  return (
    <Grid style={{ marginTop: '20px' }} doubling stackable columns={4}>
      {cardList}
    </Grid>
  );
};

export default CardList;
