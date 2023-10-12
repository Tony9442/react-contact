import React,{ Component, useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";
import { Container, Row, Col} from "react-bootstrap"

 class App extends Component{
  constructor () {
    super();

    this.state = {users: [
      { name: "Tony", email: "geanthony94@gmail.com", id: 1 },
     { name: "Sixtus", email: "geanthony94@gmail.com", id: 2 },
     { name: "Chukie", email: "geanthony94@gmail.com", id: 3 },
     { name: "Mary", email: "geanthony94@gmail.com", id: 4 },
    ],
  };
  }

  addNewUser = (newUser) => {
     this.setState({users: [...this.state.users, newUser] })
  };

     render() {
       return (
         <Container>
           <Row>
            <Col> 
            <UserForm addUser={this.addNewUser} />
             </Col>
             <Col>
             <UserList users={this.state.users} />
             </Col>
           </Row>
         </Container>
       );
     }
 }

// function App() {
//    const [users, setUsers] = useState([
//      { name: "Tony", email: "geanthony94@gmail.com", id: 1 },
//      { name: "Sixtus", email: "geanthony94@gmail.com", id: 2 },
//      { name: "Chukie", email: "geanthony94@gmail.com", id: 3 },
//      { name: "Mary", email: "geanthony94@gmail.com", id: 4 },
//    ]);

//       // To Update our arry whenever a new person logs in

//       const setNewUser = (newUser) => {
//         setUsers ([...users, newUser]);
//       };
       
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <UserForm addUser={setNewUser}/>
//         </Col>

//         <Col>
//           <UserList />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

export default App;
