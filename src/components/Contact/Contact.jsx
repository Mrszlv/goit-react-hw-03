import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <ul className={s.container}>
      <li className={s.item}>
        <span className={s.name}>{name}:</span>{" "}
        <span className={s.number}>{number}</span>
      </li>
      <button className={s.btn}>Delete</button>
    </ul>
  );
};

export default Contact;
