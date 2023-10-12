import React, { Component } from 'react'

export default class UserItem extends Component {
  render() {
    return (
      <div>
      <h3>{this.props.details.name}</h3>
      <h3>{this.props.details.email}</h3>
      </div>
    )
  }
}



