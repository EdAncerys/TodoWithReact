import React, { Component } from 'react';
import Header from './components/header/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { v4 as uuidv4 } from 'uuid';

import './css/App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Dinner with misses',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Talk to boss',
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Delete Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
