import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import { edtOneContact, getOneContact } from '../../redux/actions/actionsContact'
import { useNavigate, useParams } from 'react-router-dom';
const EditContact = () => {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
dispatch(getOneContact(id))
    }, []);
 
    const olduser=useSelector(state=>state.contactReducer.contactEdit)

    const [editconatct, setEditconatct] = useState(olduser);
    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        console.log(e.target.name);
        setEditconatct({ ...editconatct, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        setEditconatct(olduser)
            }, [olduser]);
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editconatct.email) { return alert("email is required...") }
       dispatch(edtOneContact(id,editconatct, navigate))
        ///error-->navigate('/')
        
    }
    return <div>
        <Form>
            <Form.Field>
                <label>image</label>
                <input placeholder='image' name="imageUrl" value={editconatct.imageUrl} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <label>name</label>
                <input placeholder='name' name="name" value={editconatct.name}onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <label>email</label>
                <input placeholder='email' name="email" value={editconatct.email} onChange={handleChange} required />
            </Form.Field>
            <Form.Field>
                <label>adresse</label>
                <input placeholder='adresse' name="adresse" value={editconatct.adresse}onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' onClick={handleSubmit}>Submit</Button>
        </Form>
    </div>;
};

export default EditContact;
