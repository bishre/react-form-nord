import React, { Component } from 'react';
// import ProgramItem from './Components/ProgramItem.js';

class AddProgram extends Component {
  constructor() {
    super();
    this.state = {
      newProject:{}
    }
  }
  handleSubmit(e) {
    if(this.refs.title.value===''){
      alert('Title is required');
    }
    else {
      this.setState({
        newProject:{
          title: this.refs.title.value,
          category: this.refs.category.value
        }}, function(){
          this.props.addProgram(this.state.newProgram);
        })
    }
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label>
          <input type='text' ref='title'/>
        </div>
        <div>
          <label>Category</label>
          <input type='text' ref='category'/>
        </div>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default AddProgram;
