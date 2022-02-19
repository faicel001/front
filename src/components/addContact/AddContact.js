import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import {addContact} from '../../redux/actions/actionsContact'
import { useNavigate } from 'react-router-dom';
const AddContact = () => {
 const navigate= useNavigate()
  const [newconatct, setNewconatct] = useState({name:"",email:"",adresse:"",imageUrl:""});
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(e.target.value);
    console.log(e.target.name);
    setNewconatct({...newconatct,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newconatct.email)
    { return alert("email is required...")}
    dispatch(addContact(newconatct,navigate))
    ///error-->navigate('/')
  }
  
  const dispatch=useDispatch()
  return <div>
        <Form>
    <Form.Field>
      <label>image</label>
      <input placeholder='image' name="imageUrl"onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>name</label>
      <input placeholder='name' name="name" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input placeholder='email' name="email"onChange={handleChange} required/>
    </Form.Field>
    <Form.Field>
      <label>adresse</label>
      <input placeholder='adresse' name="adresse" onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'  onClick={handleSubmit}>Submit</Button>
  </Form>
  </div>;
};

export default AddContact;
