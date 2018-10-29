import React, { Component } from 'react';
// import uuid from 'uuid';
import Programs from './Components/Programs.js';
import AddProgram from './Components/AddProgram.js';
import dataSet from './dataSet.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: 0,
      program:{id:'', name:'', email:'', phone:''},
      programs:[]
    }
  }
  componentWillMount() {
    this.setState({programs: dataSet });
  }
  handleAddPrograms(program){
    let programs=this.state.programs;
    programs.push(program);
    this.setState({programs:programs});
  }
  handleDeleteProgram(id) {
    let programs=this.state.programs;
    let index=programs.findIndex(x=>x.id === id);
    programs.splice(index, 1);
    this.setState({programs:programs})
  }
  handleEditProgram(project) {
    this.setState({
      program: project,
      isEdit: project.id
    });
  }
  handleChange(project) {
    var newProgram={
      id: project.id,
      name: project.name,
      email: project.email,
      phone: project.phone
    }
    this.setState({
      program:newProgram
    })
  }
  handleProgramUpdate(program) {
    let programs=this.state.programs;
    let index=programs.findIndex(x=>x.id===program.id);
    programs.splice(index, 1);
    programs.push(program);
    this.setState({programs:programs, isEdit:0});
  }
  sortBy(key) {
    let programs=this.state.programs;
    this.setState({
      programs: programs.sort((a,b)=>a[key]>b[key])
    })
  }
  render() {
    return (
      <div className="App">
        <AddProgram
          addProgram={this.handleAddPrograms.bind(this)}
          {...this.state}
          changeValue={this.handleChange.bind(this)}
          onProgramUpdate={this.handleProgramUpdate.bind(this)}
        />
        <Programs
          programs={this.state.programs}
          onDelete={this.handleDeleteProgram.bind(this)}
          onEdit={this.handleEditProgram.bind(this)}
          sortBy={this.sortBy.bind(this)}
        />
      </div>
    );
  }
}

export default App;
