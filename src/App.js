import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import BackgroundPhoto from './assets/header/header-background.jpg';

class App extends Component {

  state = {
    header: {
      headerPrimary: 'Pizza Place',
      headerSecondary: 'Making Great Pizza',
      backgroundImage: BackgroundPhoto,
      gradient:['to bottom','rgba(139,0,0,0.9)','rgba(136, 65, 65, 0.9)']
    }

  }

  render() {
    return (
      <div className="App">
        <Header
          primary={this.state.header.headerPrimary}
          secondary={this.state.header.headerSecondary}
          background={this.state.header.backgroundImage}
          gradient={this.state.header.gradient} />
      </div>
    )
  }
}



export default App;
