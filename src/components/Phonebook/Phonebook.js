import { Component } from "react/cjs/react.production.min";
import { Button, Form } from 'react-bootstrap';
// import './Phonebook.scss'
import styled from '@emotion/styled'
export default class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  }
  onSubmitInputHander = event => {
    event.preventDefault()
    const name = this.state.name
    const number = this.state.number
    this.props.onSubmitFunc({ name, number })
  }

   inputValueHandler = event => {
    const dataName = event.target.name
  //   this.state.contacts.find(name => {
  //     if (name !== dataName) {
        this.setState({ [dataName]: event.target.value })
  //     }
  //   })
    
    
    // console.log(this.state.name);
    // console.log(name.target.name);

  }
  render() {
    return (
      <div className="container">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.inputValueHandler}
            />
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.inputValueHandler}
            />
          </Form.Group>
            
            
          <Button variant="primary" type="submit" onClick={this.onSubmitInputHander}>
            Submit
          </Button>
        </Form>
      </div>
    
    )
  
  }
}