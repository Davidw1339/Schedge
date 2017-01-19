import React, { Component } from 'react';

//import premade components
import TaskBar from './TaskBar';
import TaskList from './TaskList';
import Table from './Table';

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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

export default App;
