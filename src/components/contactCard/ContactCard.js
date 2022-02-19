import React from 'react';
//import 'semantic-ui-css/semantic.min.css'
import { Card, Image, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions/actionsContact'
import { Link } from 'react-router-dom';
import EditContact from '../editContact/EditContact';
const ContactCard = ({ el }) => {
  const dispatch = useDispatch()
  return <div>
    <Card style={{ margin: "10px" }}>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={el.imgeUrl}
        />
        <Card.Header>{el.name}</Card.Header>
        <Card.Description>
          <strong>{el.email}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/${el._id}`}>
            <Button basic color='green'>
              Edit
            </Button>
          </Link>
          <Button basic color='red' onClick={() => dispatch(deleteContact(el._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>;
};

export default ContactCard;
