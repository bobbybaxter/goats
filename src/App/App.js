import React from 'react';

import './App.scss';

import goats from './goats';

class App extends React.Component {
  // axios calls to get data - anything that modifies state
  // this is technically inside the constructor
  hello = () => 'hi'; // needs a this.hello because this is called in the constructor

  state = {
    goats: [],
  }

  componentDidMount() {
    // where we usually do the axios call
    this.setState({ goats });
  }

  render() {
    // javascripty things, like looping through buttons to add eventListeners
    const hello2 = () => 'hi again';

    return (
      // where we write jsx
      <div className="App">
        {console.error(this.hello())}
        {console.error(hello2())}
        <div>Goat Yoga</div>
        {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
