import React, { Component } from 'react';
// import ProgramItem from './ProgramItem.js';

class Programs extends Component {
  deleteProgram(id) {
    this.props.onDelete(id);
  }
  editProgram(project) {
    this.props.onEdit(project);
  }
  render() {
    // let programitems = this.props.programs;
    // if (this.props.programs) {
    //   programitems=this.props.programs.map(program=> {
    //     return (
    //       <ProgramItem
    //       onDelete={this.deleteProgram.bind(this)}
    //       onEdit={this.editProgram.bind(this)}
    //       key={program.id}
    //       project={program}
    //       />
    //     );
    //   });
    // }
    return (
      <div className="Programs">
        <table>
          <thead>
            <tr>
            <th>
              <button onClick={()=>this.props.sortBy('id')}>ID</button>
            </th>
            <th>
              <button onClick={()=>this.props.sortBy('name')}>Name</button>
            </th>
            <th>
              <button onClick={()=>this.props.sortBy('email')}>Email</button>
            </th>
            <th>
              <button onClick={()=>this.props.sortBy('phone')}>Phone</button>
            </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.programs.map(program=>(
                <tr key={program.id}>
                  <td>{program.id}</td>
                  <td>{program.name}</td>
                  <td>{program.email}</td>
                  <td>{program.phone}</td>
                  <td><a href="#" onClick={this.deleteProgram.bind(this, program.id)}>X</a></td>
                  <td><a href="#" onClick={this.editProgram.bind(this, program)}>Edit</a></td>
                </tr>
              ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Programs;
