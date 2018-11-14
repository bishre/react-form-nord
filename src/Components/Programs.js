import React, { Component } from 'react';
import ProgramItem from './ProgramItem.js';
import './Programs.css';

const cellStyle = {
  verticalAlign: 'middle'
}

class Programs extends Component {
  deleteProgram(id) {
    this.props.onDelete(id);
  }
  editProgram(project) {
    this.props.onEdit(project);
  }
  handleChange(program) {
    this.props.changeInput(program);
  }
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={cellStyle} className="th-sm col-xs-3">Name
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('name')}></i>
              </th>
              <th style={cellStyle} className="th-sm col-xs-4">Email address
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('email')}></i>
              </th>
              <th style={cellStyle} className="th-sm col-xs-3">Phone number
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('phone')}></i>
              </th>
            </tr>
          </thead>
            {
              this.props.programs.map(program=>(
                <ProgramItem
                  key={program.id}
                  {...program}
                  handleClick={this.editProgram.bind(this, program)}
                  handleDelete={this.deleteProgram.bind(this, program.name)}
                  changeValue={this.handleChange.bind(this)}
                />
              ))
          }
        </table>
      </div>
    );
  }
}

export default Programs;
