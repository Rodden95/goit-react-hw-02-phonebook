import { Component } from "react/cjs/react.production.min";
import './App.scss'
import shortid from "shortid";
import Contacts from "./components/Contacts";
import Container from "./components/Container";
import Phonebook from "./components/Phonebook";
class App extends Component {
  state = {
  contacts: [],
  filter: ''
}
 
  contactAdd = ({name,number }) => {
    this.setState(prevState => {
      prevState.contacts.push({name, number})
    })
    console.log(this.state.contacts);
  }
  
  findContactInputHandler = (data) => {
    this.setState({filter: data.target.value})
  }
  render() {
    
    return (
      <div>
        {/* <Container> */}
        <Phonebook onSubmitFunc={ this.contactAdd}/>
        <Contacts
          contacts={this.state.contacts}
          filter={this.findContactInputHandler}
          filterValue={ this.state.filter}/>
        {/* </Container> */}
      </div>
    )
  
  }
}
export default App;
