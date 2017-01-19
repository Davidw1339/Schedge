import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    var rows = [];
    // var task = "Finish washing dishes overflow we go go and go and overflow and if we overflow too much then we have big problems lots of big problems uh oh uh oh";
    // rows.push(<TableRow time = {-12}/>)
    var task = "";
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

export default Table;
