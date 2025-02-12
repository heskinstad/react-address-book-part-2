import { Link } from "react-router-dom";

function ContactItem({contact}) {
    return (
        <>
            <li>
                <h3>
                    <Link to={`/contacts/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
                </h3>
            </li>
        </>
    );
}

export default ContactItem;