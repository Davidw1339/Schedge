import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        // {
        //   text: "Finish washing dishes overflow we go go and go and overflow and if we overflow too much then we have big problems lots of big problems uh oh uh oh",
        //   date: "12/9/16",
        //   key: 1,
        //   id: 1
        // },
        // {
        //   text: "Test",
        //   date: "12/10/16",
        //   key: 2,
        //   id: 2
        // },
        // {
        //   text: "Yes yes yes",
        //   date: "12/11/16",
        //   key: 3,
        //   id: 3
        // }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  render() {
    return (
      <div className="App row full-height">
        <div className="col-sm-4 full-height" id="task-zone">
          <TaskBar onEnter={this.addTask}/>
          <TaskList tasks={this.state.tasks} onClick={this.deleteTask}/>
        </div>
        <div className="col-sm-8 full-height" id="schedule-zone">
          <Table/>
        </div>
      </div>
    )
  }

  addTask(event) {
    // check if the enter key was pressed
    if(event.charCode===13) {
      var tasks = this.state.tasks;
      var id = 0;
      // if there are tasks in the task list, then get latest id
      if(tasks.length > 0)
        id = tasks[tasks.length - 1].key + 1;
      // create the task from scratch
      var newTask = {
        text: event.target.value,
        date: "",
        key: id,
        id: id
      };
      // set the state accordingly and reset the task bar value
      this.setState({tasks: this.state.tasks.concat([newTask])});
      event.target.value = "";
    }
  }

  deleteTask(event) {
    // get the id of the parent of the button (force type to num)
    var id = parseInt(event.target.parentElement.parentElement.id, 10);
    var tasks = this.state.tasks;
    // loop through all the tasks and find the one to delete
    for(var i = 0; i < tasks.length; i++) {
      if(tasks[i].id===id) {
        // remove the task from the task list
        var newTaskArr = this.state.tasks.slice();
        newTaskArr.splice(i, 1); //remove the singular element
        this.setState({tasks: newTaskArr});
      }
    }
  }
}

class TaskBar extends Component {
  render() {
    return <input type="text" className="task-bar" placeholder="Add Task" onKeyPress={this.props.onEnter}/>
  }
}

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
        {taskList}
      </ul>
    )
  }
}

  class Table extends Component {
    render() {
      var rows = [];
      var task = "Finish washing dishes overflow we go go and go and overflow and if we overflow too much then we have big problems lots of big problems uh oh uh oh";
      // rows.push(<TableRow time = {-12}/>)
      for (var i=0; i < 24; i++) {
        rows.push(<TableRow key={i} time={i} task={task}/>);
      }
      return (
      <table className="schedule-table">
        <tbody>
          {rows}
        </tbody>
      </table>)
    }
  }

  class TableRow extends Component {
    render() {

      //set time correctly from props
      var time = "";
      if(this.props.time > 12)
        time = this.props.time - 12 + ":00 pm";
      else if(this.props.time === 12)
        time = this.props.time + ":00 pm";
      else if(this.props.time === 0)
        time =  "12:00 am";
      else
        time = this.props.time + ":00 am";

      return (
        <tr className="table-row">
          <td className="time-data">{time}</td>
          <td>{this.props.task}</td>
        </tr>
      );
    }
  }

export default App;
