import React, { Component } from 'react';
// import ProgramItem from './Components/ProgramItem.js';
import uuid from 'uuid';

class AddProgram extends Component {
  constructor() {
    super();
    this.state = {
      newProgram:{}
    }
  }
  handleSubmit(e) {
    if(this.refs.id.value===''){
      alert('Title is required');
    }
    else {
      this.setState({
        newProgram:{
          id: this.refs.id.value,
          name: this.refs.name.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value,
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
          <label>ID</label>
          <input type='text' ref='id'/>
        </div>
        <div>
          <label>Name</label>
          <input type='text' ref='name'/>
        </div><div>
          <label>Email</label>
          <input type='text' ref='email'/>
        </div><div>
          <label>Phone</label>
          <input type='text' ref='phone'/>
        </div>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default AddProgram;
