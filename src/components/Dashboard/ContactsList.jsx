import ContactItem from "./ContactListItem"
import { useContext } from "react"
import { ContactContext } from "../../App";
import { useEffect, useState } from "react";

function ContactsList() {
  const { contacts } = useContext(ContactContext);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = contacts.filter(contact => contact.firstName.toLowerCase().includes(value.toLowerCase()));
    setFilteredContacts(filtered);
  };

  useEffect(() => {
    setFilteredContacts(contacts);
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      Filter:
      <input
        type="text"
        onChange={handleFilter}
      />
      <ul>
        {filteredContacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;