import s from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <span className={s.name}>{name}:</span>{" "}
        <span className={s.number}>{number}</span>
      </li>
      <button className={s.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ul>
  );
};

export default Contact;
