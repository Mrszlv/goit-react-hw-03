import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
