import s from "./SearchBox.module.css";

const SearchBox = ({ filter, change }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={change}
        placeholder="Enter name..."
      />
    </>
  );
};

export default SearchBox;
