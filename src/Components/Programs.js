import React, { Component } from 'react';
import ProgramItem from './ProgramItem.js';

class Programs extends Component {
  render() {
    let programitems;
    if (this.props.programs) {
      programitems=this.props.programs.map(program=> {
        return (
          <ProgramItem key={program.title} project={program}/>
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
