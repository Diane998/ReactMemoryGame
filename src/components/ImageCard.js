import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ImageCard = ({ ship, onShipSelect }) => {
  return (
    <Card color="grey" raised onClick={() => onShipSelect(ship)} fluid>
      <Image src={ship.imgUrl} />
      <Card.Content>
        <Card.Header>{ship.title}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default ImageCard;
