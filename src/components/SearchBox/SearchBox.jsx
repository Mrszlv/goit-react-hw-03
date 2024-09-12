import s from "./SearchBox.module.css";

const SearchBox = ({ filter, change }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input className={s.input} type="text" value={filter} onChange={change} />
    </>
  );
};

export default SearchBox;
