import React, { Component } from 'react';
// import ProgramItem from './Components/ProgramItem.js';

class AddProgram extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     newProgram:{}
  //   }
  // }
  handleSubmit(e) {
    if(this.refs.id.value===''){
      alert('Title is required');
    }

    else if(this.props.isEdit) {
      var updatedProgram = {
        id: this.props.isEdit,
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value
      }
      this.props.onProgramUpdate(updatedProgram);
    }
    else {
      var newProgram={
        id: this.refs.id.value,
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
      }
      this.props.addProgram(newProgram);
      // this.setState({
      //   newProgram:{
      //     id: this.refs.id.value,
      //     name: this.refs.name.value,
      //     email: this.refs.email.value,
      //     phone: this.refs.phone.value,
      //   }}, function(){
      //     this.props.addProgram(this.state.newProgram);
      //   })
    }
    e.preventDefault();
  }
  onChange(e) {
    this.props.changeValue(e.target.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>ID</label>
          <input type='text' value={this.props.program.id} ref='id' onChange={this.onChange.bind(this)}/>
        </div>
        <div>
          <label>Name</label>
          <input type='text' value={this.props.program.name} ref='name' onChange={this.onChange.bind(this)}/>
        </div><div>
          <label>Email</label>
          <input type='text' value={this.props.program.email} ref='email' onChange={this.onChange.bind(this)}/>
        </div><div>
          <label>Phone</label>
          <input type='text' value={this.props.program.phone} ref='phone' onChange={this.onChange.bind(this)}/>
        </div>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default AddProgram;
