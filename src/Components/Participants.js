import React, { Component } from 'react';
import ParticipantItem from './ParticipantItem.js';
import './Participants.css';

const cellStyle = {
  verticalAlign: 'middle',
  paddingLeft: '24px'
}

class Participants extends Component {
  deleteParticipant(id) {
    this.props.onDelete(id);
  }
  editParticipant(index, valueList) {
    this.props.onEdit(index, valueList);
  }
  handleChange(project) {
    this.props.changeInput(project);
  }
  render() {
    let participantItems =
      this.props.participants.map((project,index)=>(
        <ParticipantItem
          key={project.id}
          index={index}
          {...project}
          user={this.props.participant}
          handleClick={this.editParticipant.bind(this)}
          handleDelete={this.deleteParticipant.bind(this, project.name)}
          changeValue={this.handleChange.bind(this)}
        />
      ));
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={cellStyle} className="th-sm col-xs-3">Name
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('name')}></i>
              </th>
              <th style={cellStyle} className="th-sm col-xs-3">Email address
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('email')}></i>
              </th>
              <th style={cellStyle} className="th-sm col-xs-3">Phone number
                <i className="fas fa-arrow-down float-right" aria-hidden="true" onClick={()=>this.props.sortBy('phone')}></i>
              </th>
            </tr>
          </thead>
            {participantItems}
        </table>
      </div>
    );
  }
}

// Programs.propTypes = {
//   programs: React.PropTypes.array,
//   onDelete: React.PropTypes.func,
//   onEdit: React.PropTypes.func,
//   sortBy: React.PropTypes.func,
//   changeInput: React.PropTypes.func
// }

export default Participants;
