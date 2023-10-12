import React, {Component} from "react";
import { Container, Form, Button } from "react-bootstrap";

class UserForm extends Component {
    constructor() {
        super()
        this.state ={
            name: "",
            email: ""
        };

    }
    

        handleNameChange = (e) => {
            this.setState({name: e.target.value});
        };

        handleEmailChange = (e) => {
          this.setState({ email: e.target.value });
        };

        handleSubmitt = (e) => {
            e.preventDefault()

           if (this.state.name.length > 0 && this.state.email.length > 0){
             let newUser = {
               name: this.state.name,
               email: this.state.email,
               id: 12,
             };

             this.props.addUser(newUser);

             this.setState({ name: "", email: "" });
           }
        };


    
    render() {
        return (
            <Container>
          <Form onSubmit={this.handleSubmitt}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Fullname</Form.Label>
              <Form.Control 
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text" placeholder="Enter name" />
               <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>User Email</Form.Label>
              <Form.Control value={this.state.email}
              onChange={this.handleEmailChange}
              type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Container>
        );
    }
}

export default UserForm;

