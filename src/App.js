import './App.css';
import ContactList from './components/contactList/ContactList';
import { Link, Route, Routes } from 'react-router-dom'
import AddContact from './components/addContact/AddContact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from './redux/actions/actionsContact'
import EditContact from './components/editContact/EditContact';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getAllContacts())
  }, []);

  return (
    <div className="App">

      <h1>nav bar</h1>

      <Routes>
        <Route path="/" element=
          {
            <div>
              <ContactList />
              <Link to="/add"> <button>ADD</button></Link>
            </div>
          } />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact/>}/>
      </Routes>

    </div>
  );
}

export default App;
