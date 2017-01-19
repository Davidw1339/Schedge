import React, { Component } from 'react';

//Component that allows for users to input text and add new tasks
class TaskBar extends Component {
  render() {
    return <input type="text" className="task-bar" placeholder="Add Task" onKeyPress={this.props.onEnter}/>
  }
}

export default TaskBar;
