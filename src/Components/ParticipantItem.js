import React, { Component } from 'react';

const cellStyle = {
  verticalAlign: 'middle',
  color: '#505050',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  paddingLeft: '24px'
}

const editStyle = {
  verticalAlign: 'middle',
  fill: '#909090',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400'
}

const cancelStyle = {
  verticalAlign: 'middle',
  height: '40px',
  width: '10px'
}

const saveStyle = {
  verticalAlign: 'middle',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '500'
}

class ParticipantItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    }
  }

  handleClick() {
    const { editing }=this.state;
    this.setState({
      editing: !editing
    })
  };

  cancelEdit() {
    this.setState({
      editing: false
    })
  }

  saveChanges(e) {
    e.preventDefault();
    const valueList={
      id: this.props.id,
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    }
    this.props.handleClick(this.props.index, valueList);
    this.handleClick();
  }

  handleChange(e) {
    this.props.changeValue(e.target.value);
  }


  render() {
    let textOrInput;
    if (this.state.editing) {
      textOrInput =
      <tr>
        <td style={cellStyle}><input className="form-control" type='text' ref={(value)=>{this.name=value}} defaultValue={this.props.name} onChange={this.handleChange.bind(this)}/></td>
        <td style={cellStyle}><input className="form-control" type='text' ref={(value)=>{this.email=value}} defaultValue={this.props.email} onChange={this.handleChange.bind(this)}/></td>
        <td style={cellStyle}><input className="form-control" type='text' ref={(value)=>{this.phone=value}} defaultValue={this.props.phone} onChange={this.handleChange.bind(this)}/></td>
        <td style={cancelStyle}><input type="submit" className="btn btn-default" onClick={this.cancelEdit.bind(this)} value="Cancel"/></td>
        <td style={saveStyle}><input type="submit" className="btn btn-primary" onClick={this.saveChanges.bind(this)} value="Save"/></td>
      </tr>
    } else {
      textOrInput=
      <tr>
        <td style={cellStyle}>{this.props.name}</td>
        <td style={cellStyle}>{this.props.email}</td>
        <td style={cellStyle}>{this.props.phone}</td>
        <td style={editStyle}><i className="fas fa-pencil-alt" onClick={this.handleClick.bind(this)}></i></td>
        <td style={editStyle}><i className="fas fa-trash" onClick={this.props.handleDelete}></i></td>
      </tr>
    }
    return (
      <tbody>
      {textOrInput}
      </tbody>
    );
  }
}

export default ParticipantItem;
