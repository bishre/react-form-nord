import React, { Component } from 'react';
// import './App.css';
import Programs from './Components/Programs.js';
import AddProgram from './Components/AddProgram.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      programs:[]
    }
  }
  componentWillMount() {
    this.setState({programs: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]});
  }
  handleAddPrograms(project){
    console.log(project);
  }
  render() {
    return (
      <div className="App">
        <AddProgram addProgram={this.handleAddPrograms.bind(this)} />
        <Programs programs={this.state.programs}/>
      </div>
    );
  }
}

export default App;
