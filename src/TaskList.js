import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TaskList extends Component {
  render() {
    var tasks = this.props.tasks;
    var onClick = this.props.onClick;
    function createTask(task) {
      return (
        <li className="task_item" key={task.key} id={task.id}>
          <div className="task_text">{task.text}</div>
          <div className="task_bottom">
            <button className="close" onClick={onClick}>X</button>
            <div className="due_date">
            {task.date}
            </div>
          </div>
        </li>
      )

    }

    var taskList = tasks.map(createTask);
    return (
      <ul className="task_list">
        <FlipMove enterAnimation="accordionVertical" leaveAnimation="elevator">
          {taskList}
        </FlipMove>
      </ul>
    )
  }
}

export default TaskList;
