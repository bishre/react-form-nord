import React, { Component } from 'react';
import './AddParticipant.css';
import * as type from 'prop-types';

class AddParticipant extends Component {
  handleSubmit(e) {
    e.preventDefault();
      var newParticipant={
        id: Math.floor((Math.random()*100)+120),
        name: this.refs.name.value,
        email: this.refs.email.value,
        phone: this.refs.phone.value,
      }
      this.props.addParticipant(newParticipant);
      this.refs.name.value='';
      this.refs.email.value='';
      this.refs.phone.value='';
    }

  render() {
    return (
      <div className="form-group row">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-md-3">
            <input className="form-control" type='text' placeholder="Full name" ref='name' required/>
          </div>
          <div className="form-group col-md-4">
            <input className="form-control" type='text' placeholder="Email Address" ref='email' required/>
          </div>
          <div className="form-group col-md-3">
            <input className="form-control" type='text' placeholder="Phone number" ref='phone' required/>
          </div>
          <div className="form-group col-md-2">
            <input className="btn btn-basic" style={{float:'right'}} type='submit' value='Add new'/>
          </div>
        </form>
      </div>
    );
  }
}

AddParticipant.propTypes = {
  addParticipant: type.PropTypes.func,
}

export default AddParticipant;
