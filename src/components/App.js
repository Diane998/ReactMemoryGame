import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import _ from 'lodash';

import CardList from './CardList';
import Score from './Score';

import Lambda from '../assets/images/Lambda-class Imperial Shuttle.jpg';
import Radiant from '../assets/images/​Radiant VII.png';
import NabooCruiser from '../assets/images/​Naboo Royal Cruiser.webp';
import Vulture from '../assets/images/Vulture Droid.webp';
import Razor from '../assets/images/Razor Crest.webp';
import Tantive from '../assets/images/Tantive IV.webp';
import MG from '../assets/images/MG-100 StarFortress bomber.webp';
import NabooStarship from '../assets/images/Naboo Royal Starship.webp';
import Fulminatrix from '../assets/images/Fulminatrix.webp';
import TieFighter from '../assets/images/TIE fighter.webp';
import Separatist from '../assets/images/Separatist dreadnought.webp';
import MF from "../assets/images/Lando Calrissian's Millennium Falcon.webp";

class App extends Component {
  state = {
    ships: [
      { title: 'Lambda-class Imperial Shuttle', imgUrl: Lambda },
      { title: 'Radiant VII', imgUrl: Radiant },
      { title: 'Naboo Royal Cruiser', imgUrl: NabooCruiser },
      { title: 'Vulture Droid', imgUrl: Vulture },
      { title: 'Razor Crest', imgUrl: Razor },
      { title: 'Tantive IV', imgUrl: Tantive },
      { title: 'MG-100 StarFortress bomber', imgUrl: MG },
      { title: 'Naboo Royal Starship', imgUrl: NabooStarship },
      { title: 'Fulminatrix', imgUrl: Fulminatrix },
      { title: 'Imperial-era TIE fighter', imgUrl: TieFighter },
      { title: 'Separatist dreadnought', imgUrl: Separatist },
      { title: "Lando Calrissian's Millennium Falcon", imgUrl: MF }
    ],
    selectedShips: [],
    score: 0,
    highScore: 0
  };

  onShipSelect = ship => {
    _.some(this.state.selectedShips, ship)
      ? this.setState(prevState => {
          return {
            ...prevState,
            selectedShips: [],
            highScore: Math.max(prevState.score, this.state.highScore),
            score: 0
          };
        })
      : this.setState({
          selectedShips: [...this.state.selectedShips, ship],
          score: _.add(this.state.score, 1)
        });
  };

  render() {
    return (
      <Container textAlign="center" style={{ width: '95%' }}>
        <Header as="h1" style={{ marginTop: '20px', color: 'white' }}>
          Memory Game
        </Header>
        <Score ships={this.state} />
        <CardList ships={this.state.ships} onShipSelect={this.onShipSelect} />
      </Container>
    );
  }
}

export default App;
