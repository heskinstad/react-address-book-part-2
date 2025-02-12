import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactItem(props) {
    const [contact, setContact] = useState(null);
    const { id } = useParams();
    const { contacts } = props;

    useEffect(() => {
        if (contacts && id) {
          setContact(contacts.find((contact) => Number(contact.id) === Number(id)));
        }
      }, [contacts, id]);

    if (!contact) return <p>No contact with ID: {id}</p>;
    
    return (
        <>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street}, {contact.city}</p>
        </>
    );
}

export default ContactItem;