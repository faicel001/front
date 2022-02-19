import { GET_All_CONTACTS_SUCCESS, GET_ONE_CONTACT_FAIL, GET_ONE_CONTACT_SUCCESS, GET_All_CONTACTS_FAIL, CONTACTS_LOAD } from "../actionTypes/actionTypeContact"
const initialstate = {
    loading: false,
    contactsList: [],
    errors: null,
    contactEdit: {}
}
export const contactReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case CONTACTS_LOAD:
            return { ...state, loading: true }
        case GET_All_CONTACTS_SUCCESS:
            return { ...state, contactsList: payload, loading: false }
        case GET_All_CONTACTS_FAIL:
            return { ...state, errors: payload, loading: false }
        case GET_ONE_CONTACT_SUCCESS:
            return { ...state, contactEdit: payload }
        case GET_ONE_CONTACT_FAIL:
            return { ...state, errors: payload, loading: false }
        default:
            return state
    }
}