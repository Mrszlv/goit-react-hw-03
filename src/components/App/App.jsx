import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useState } from "react";
import s from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    console.log("add contact:", newContact);
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase.includes(filter.toLowerCase())
  );

  const hanleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} change={hanleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
