import React, { Component } from 'react';
import Todos from './components/Todos';

import './css/App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with misses',
        completed: false,
      },
      {
        id: 3,
        title: 'Talk to boss',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
