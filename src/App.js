import { Component } from "react/cjs/react.production.min";
import './App.scss'



import Phonebook from "./components/Phonebook";
class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Denis', number: '123-123-123' },
      { id: 2, name: 'Leha', number: '123-123-123' },
      { id: 3, name: 'Sobaka', number: '123-123-123' },
    ],
  filter: ''
}
 
  contactAdd = ({ name, number,id }) => {
    const newContact = {id, name, number}
    let findResult = this.state.contacts.find(e => e.name === name)
    
    findResult === undefined ?
      this.setState(prevState =>
        ({ contacts: [...prevState.contacts, newContact] })) : alert('this name is present in')
      
  }
  contactsFilter = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter))

  filterInputValueToState = (data) =>
    this.setState({ filter: data.target.value.toLowerCase() }) 
  
  contactDelete = currentId =>
    this.setState(({ contacts }) =>
      ({ contacts: contacts.filter(({ name }) => name !== currentId) }))
  

  render() {
    const filteredContacts = this.contactsFilter()
    
    return (
      <div>
        <Phonebook
          onSubmitFunc={this.contactAdd}
          contacts={filteredContacts}
          
          filter={this.filterInputValueToState}
          deleteContact={this.contactDelete}
        />
      </div>
    )
  
  }
}
export default App;
