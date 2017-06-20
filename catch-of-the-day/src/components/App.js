import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    //Initial Statu
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update state
    const fishes = {...this.state.fishes};
    // add new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // Set state
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
