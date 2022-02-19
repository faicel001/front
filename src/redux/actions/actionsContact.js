import { GET_All_CONTACTS_SUCCESS,EDIT_ONE_CONTACT_FAIL,EDIT_ONE_CONTACT_SUCCESS, GET_All_CONTACTS_FAIL,GET_ONE_CONTACT_SUCCESS,GET_ONE_CONTACT_FAIL, CONTACTS_LOAD,DELETE_CONTACT_FAIL,DELETE_CONTACT_SUCCESS,ADD_NEW_CONTACT_FAIL,ADD_NEW_CONTACT_SUCCESS } from "../actionTypes/actionTypeContact"
import axios from "axios"

export const getAllContacts = () => async dispatch => {
    dispatch({ type: CONTACTS_LOAD })
    try {
        const response = await axios.get("http://localhost:4000/contact/list")
        dispatch({ type: GET_All_CONTACTS_SUCCESS, payload: response.data.allCont })
    } catch (error) {
        dispatch({ type: GET_All_CONTACTS_FAIL, payload: error })
    }

}
export const deleteContact= (id) => async dispatch =>{
   try {
       const response = await axios.delete(`http://localhost:4000/contact/contdel/${id}`)
       dispatch({type:DELETE_CONTACT_SUCCESS, payload: response})
       dispatch(getAllContacts())
       alert(response.data.msg)
   } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error })
   }
}
export const addContact= (newContact,navigate)=> async dispatch =>{
    try {
        const response = await axios.post("http://localhost:4000/contact/",newContact)
        dispatch({type:ADD_NEW_CONTACT_SUCCESS, payload: response})
        dispatch(getAllContacts())
        navigate('/')
    } catch (error) {
        dispatch({ type:ADD_NEW_CONTACT_FAIL, payload: error })
        console.dir(error);
        alert(error.response.data)
        
    }
}
export const getOneContact = (id) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:4000/contact/find/${id}`)
        dispatch({ type: GET_ONE_CONTACT_SUCCESS, payload: response.data.oneCont })
    } catch (error) {
        dispatch({ type: GET_ONE_CONTACT_FAIL, payload: error })
    }

}
export const edtOneContact = (id,editcont,navigate) => async dispatch => {
    try {
        const response = await axios.put(`http://localhost:4000/contact/updateuser/${id}`,editcont)
        dispatch({ type: EDIT_ONE_CONTACT_SUCCESS, payload: response.data })
        dispatch(getAllContacts())
        navigate("/")
    } catch (error) {
        dispatch({ type: EDIT_ONE_CONTACT_FAIL, payload: error })
    }

}