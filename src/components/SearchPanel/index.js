import { useRef } from "react";
import * as Style from "./style";

const SearchPanel = ({ inputHandler, inputHandle }) => {
  
  const focusref = useRef(null);

  const focusOn = () => focusref.current.focus();
  
  return (
    <Style.Container>
      <input
        ref={focusref}
        onChange={inputHandler}
        onInput={inputHandle}
        placeholder="Search for messages or users"
      />
      <i className="fa-solid fa-magnifying-glass" onClick={focusOn}></i>
    </Style.Container>
  );
};

export default SearchPanel;
