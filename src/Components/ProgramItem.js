import React, { Component } from 'react';

const cellStyle = {
  verticalAlign: 'middle'
}

class ProgramItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      name: '',
      email: '',
      phone: ''
    }
  }
  handleClick() {
    this.setState({
      editing: true
    })
  };

  cancelEdit() {
    this.setState({
      editing: false
    })
  }

  saveChanges() {
    this.props.handleClick();
  }

  handleChange(e) {
    this.props.changeValue(e.target.value);
  }


  render() {
    let textOrInput;
    if (this.state.editing) {
      textOrInput =
      <tr key={this.props.id}>
        <td><input className="form-control" type='text' ref='name' value={this.props.name} onChange={this.handleChange.bind(this)}/></td>
        <td><input className="form-control" type='text' ref='email' value={this.props.email} onChange={this.handleChange.bind(this)}/></td>
        <td><input className="form-control" type='text' ref='phone' value={this.props.phone} onChange={this.handleChange.bind(this)}/></td>
        <td><input type="submit" className="btn btn-default" onClick={this.cancelEdit.bind(this)} value="Cancel"/></td>
        <td><input type="submit" className="btn btn-primary" onClick={this.saveChanges.bind(this)} value="Save"/></td>
      </tr>
    } else {
      textOrInput=
      <tr>
        <td style={cellStyle}>{this.props.name}</td>
        <td style={cellStyle}>{this.props.email}</td>
        <td style={cellStyle}>{this.props.phone}</td>
        <td style={cellStyle}><i className="fas fa-pencil-alt" onClick={this.handleClick.bind(this)}></i></td>
        <td style={cellStyle}><i className="fas fa-trash" onClick={this.props.handleDelete}></i></td>
      </tr>
    }
    return (
      <tbody>
      {textOrInput}
      </tbody>
    );
  }
}

export default ProgramItem;
