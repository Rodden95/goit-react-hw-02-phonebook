import { Form, ListGroup, Button } from 'react-bootstrap'

export default function Contacts({ contacts, deleteContact }) {
  
  return (
    <div className='container'>
      <h2>Contacts:</h2>
      <ListGroup as="ul" >
        {contacts.map(item => {
          return (
            <ListGroup.Item as="li" key={item.name} className='item'>
              <span className='margin'>{item.name} : {item.number}</span> 
               
              <Button variant="danger" onClick={() => {
                deleteContact(item.name)
              }} name={item.name}> Delete</Button>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
    
  )
}


