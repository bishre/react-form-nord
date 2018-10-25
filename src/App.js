import React, { Component } from 'react';
// import uuid from 'uuid';
import Programs from './Components/Programs.js';
import AddProgram from './Components/AddProgram.js';
import dataSet from './dataSet.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    return (
      <div className="App">
        <AddProgram addProgram={this.handleAddPrograms.bind(this)} />
        <Programs programs={this.state.programs} onDelete={this.handleDeleteProgram.bind(this)}/>
      </div>
    );
  }
}

export default App;
