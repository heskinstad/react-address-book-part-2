import ContactItem from "./ContactListItem"
import { useContext } from "react"
import { ContactContext } from "../../App";

function ContactsList() {
  const { contacts } = useContext(ContactContext);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;