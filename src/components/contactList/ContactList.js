import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from '../contactCard/ContactCard';
import './ContactList.css'

const ContactList = () => {
  const cntList=useSelector(state=>state.contactReducer.contactsList)
  console.log(cntList);
  
  return <div className='main'>
      {cntList.map(el=><ContactCard  el={el} key={el._id}/>)}
      </div>;
};

export default ContactList;
