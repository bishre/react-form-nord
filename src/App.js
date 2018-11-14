import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Programs from './Components/Programs.js';
import AddProgram from './Components/AddProgram.js';
import dataSet from './dataSet.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isEdit: '',
      program:{name:'', email:'', phone:''},
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
  handleDeleteProgram(name) {
    let programs=this.state.programs;
    let index=programs.findIndex(x=>x.name === name);
    programs.splice(index, 1);
    this.setState({programs:programs})
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
    let index=programs.findIndex(x=>x.name===this.state.isEdit);
    console.log(index);
    programs.splice(index, 1);
    programs.push(program);
    this.setState({programs:programs, isEdit:''});
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
        <div className="App-header">
          <img src={logo} className="logo" alt="logo"/>
          <h3>Nord Software</h3>
        </div>
        <div className="list-title">
          <h2>List of Participants</h2>
        </div>
        <div className="app-body">
          <div className="addProgram">
            <AddProgram
              addProgram={this.handleAddPrograms.bind(this)}
              {...this.state}
              changeValue={this.handleChange.bind(this)}
              // onProgramUpdate={this.handleProgramUpdate.bind(this)}
            />
          </div>

          <div className="programs">
            <Programs
              {...this.state}
              onDelete={this.handleDeleteProgram.bind(this)}
              onEdit={this.handleProgramUpdate.bind(this)}
              sortBy={this.sortBy.bind(this)}
              changeInput={this.handleChange.bind(this)}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
