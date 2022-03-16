import * as Style from "./style";

const SearchPanel = ({ query, onSearch, inputHandler }) => {
  return (
    <Style.Container>
      <input
        // value={query}
        onInput={ inputHandler}
        // onChange={onSearch}
        placeholder="Search for messages or users"
      />
      <i className="fa-solid fa-magnifying-glass"></i>
    </Style.Container>
  );
};

export default SearchPanel;
