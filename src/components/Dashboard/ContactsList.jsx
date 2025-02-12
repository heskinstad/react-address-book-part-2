import ContactItem from "./ContactListItem"

function ContactsList(props) {
  const { contacts } = props;

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