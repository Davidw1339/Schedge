import React, { Component } from 'react';

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

export default TableRow;
