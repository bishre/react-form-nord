import React, { Component } from 'react';

class ProgramItem extends Component {
  deleteItem(id) {
    this.props.onDelete(id);
  }
  editItem(project) {
    this.props.onEdit(project);
  }
  render() {
    return (
      // <div>
      //   <td>{this.props.project.id}</td>
      //   <td>{this.props.project.name}</td>
      //   <td>{this.props.project.email}</td>
      //   <td>{this.props.project.phone}</td>
      // </div>
      <li>
        // <strong>{this.props.project.id}</strong> : {this.props.project.name} :
        // {this.props.project.email} : {this.props.project.phone}
        <a href="#" onClick={this.deleteItem.bind(this, this.props.project.id)}>X</a>
        <a href="#" onClick={this.editItem.bind(this, this.props.project)}>Edit</a>
      </li>
    );
  }
}

export default ProgramItem;
