import React, { Component } from 'react';

class ProgramItem extends Component {
  deleteItem(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li>
        <strong>{this.props.project.id}</strong> : {this.props.project.name} :
        {this.props.project.email} : {this.props.project.phone}
        <a href="#" onClick={this.deleteItem.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProgramItem;
