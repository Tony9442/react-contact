import React, { Component } from 'react'
import UserItem from './UserItem'

 class UserList extends Component {
  render() {
    return (
      <div>
        <h1>User List Component</h1>
        
        {this.props.users.map((user) => {
            return (
              <div>
                <UserItem key={user.id}details={user}/>
              </div>
            );
        })}
         
      </div>
    );
  }
}

export default UserList



