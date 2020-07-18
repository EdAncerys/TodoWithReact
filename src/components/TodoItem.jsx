import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.todos.title}</h1>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoItem;
