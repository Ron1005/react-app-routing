import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) =>{

    const delContact = (id) =>{
        props.deleteContactHandler(id)
    }
    const renderContactList = props.contacts.map((contact)=>{
        return(
          <ContactCard contact={contact} delContact={delContact}/>
        );
    })
    return(
       <div className="main" style={{marginTop:"50px"}}>
        <h2>
            Contact List
            <Link to="/add">
            <button className="ui button blue"
            style={{float:"right"}}>
            Add Button
           </button>
           </Link>
        </h2>
       
        <div className="ui celled list">
            {renderContactList}
        </div>
        </div>
        
        
    );
}

export default ContactList;