import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import ContactsList from "./components/Dashboard/ContactsList"
import ContactItem from "./components/Dashboard/ContactItem"
import CreateContact from "./components/Dashboard/CreateContact"
import UpdateContact from "./components/Dashboard/UpdateContact"

function App() {
    const url = "https://boolean-uk-api-server.fly.dev/heskinstad/contact";
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        setContacts(jsonData);
    };

    useEffect(() => {
        fetchData();
      }, []);

    
    return (
        <div className="app">
            <div className="header">
                <h1>Address book</h1>
            </div>
            
            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    <li>
                        <Link to="/">Contact List</Link>
                    </li>
                    <li>
                        <Link to="/contacts/new">Create Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="content">
            <Routes>
                <Route path="/" element={<ContactsList contacts={contacts} />} />
                <Route path="/contacts/:id" element={<ContactItem contacts={contacts} />} />
                <Route path="/contacts/new" element={<CreateContact contacts={contacts} fetchData={fetchData} />} />
                <Route path="/contacts/update/:id" element={<UpdateContact contacts={contacts} fetchData={fetchData} />} />
            </Routes>
            </div>
        </div>
    );
}

export default App;
