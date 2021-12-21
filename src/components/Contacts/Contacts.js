import { Form, ListGroup } from 'react-bootstrap'
import shortid from "shortid";
export default function Contacts({contacts, filter,filterValue} ) {
  return (
    <div className='container'>
      <h2>Contacts:</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Find contact</Form.Label>
          <Form.Control type="text" onChange={filter}/>
          </Form.Group>
      </Form>
      <ListGroup as="ol" numbered>
        {contacts.map(item => {
          const id = shortid.generate()
          // console.log(item);
          if (item.name.includes(filterValue)) {
             return (
            
            <ListGroup.Item as="li" key={id}>
              {item.name}
              {item.number}
            </ListGroup.Item>
          )
          }
          <ListGroup.Item as="li" key={id}>
              {item.name}
              {item.number}
            </ListGroup.Item> 
         
        })}
      </ListGroup>
    </div>
    
  )
}


