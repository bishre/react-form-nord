import React, { Component } from 'react';
import ProgramItem from './ProgramItem.js';

class Programs extends Component {
  deleteProgram(id) {
    this.props.onDelete(id);
  }
  render() {
    let programitems;
    if (this.props.programs) {
      programitems=this.props.programs.map(program=> {
        return (
          <ProgramItem onDelete={this.deleteProgram.bind(this)} key={program.id} project={program}/>
        );
      });
    }
    return (
      <div className="Programs">
        {programitems}
      </div>
    );
  }
}

export default Programs;
