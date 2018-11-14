import React, { Component } from 'react';
// import ProgramItem from './Components/ProgramItem.js';
import './AddProgram.css';

class AddProgram extends Component {
  handleSubmit(e) {
    if(this.refs.name.value===''){
      alert('Name is required');
    }

    // else if(this.props.isEdit) {
    //   var updatedProgram = {
    //     name: this.refs.name.value,
    //     email: this.refs.email.value,
    //     phone: this.refs.phone.value
    //   }
    //   this.props.onProgramUpdate(updatedProgram);
    // }
    else {
      var newProgram={
        id: Date.now(),
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
      }
      this.props.addProgram(newProgram);
    }
    e.preventDefault();
  }
  onChange(e) {
    this.props.changeValue(e.target.value);
  }
  render() {
    return (
      <div className="form-group row">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-md-3">
            <input className="form-control" type='text' placeholder="Full name" ref='name' onChange={this.onChange.bind(this)} required/>
          </div>
          <div className="form-group col-md-4">
            <input className="form-control" type='text' placeholder="Email Address" ref='email' onChange={this.onChange.bind(this)} required/>
          </div>
          <div className="form-group col-md-3">
            <input className="form-control" type='text' placeholder="Phone number" ref='phone' onChange={this.onChange.bind(this)} required/>
          </div>
          <div className="form-group col-md-2">
            <input className="btn btn-basic" style={{float:'right'}} type='submit' value='Add new'/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProgram;
