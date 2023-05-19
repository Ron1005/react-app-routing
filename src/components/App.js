import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState,useEffect } from 'react';
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import ContactDetial from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState([]);

  const addContactHandler = (childvalue) =>{
    console.log(childvalue)
    setContacts([...contacts,{id:uuidv4(),...childvalue}])
  }

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id
    });
    setContacts(newContactList)
  }

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))&& JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).length>0)
    {
    setContacts(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

  return (
  <div className='ui container'>
    <Router>
    <Header></Header>
    <Routes>
      <Route path="/"  
       element={<ContactList contacts={contacts} deleteContactHandler = {removeContactHandler}/>}
      />
      <Route path="/add"  
      element={<AddContact addContactHandler={addContactHandler}/>}
      />
      <Route path="/contact/:id" element={<ContactDetial/>}>
        
      </Route>
   {/* <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} deleteContactHandler = {removeContactHandler}/> */}
    </Routes>
    </Router>
 
  </div>
  );
}

export default App;
