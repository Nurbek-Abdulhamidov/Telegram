import * as Style from "./style"
import Data from "../../Data/Data";

const Buttons = ({ setItem, menuItems, filterItem }) => {
  return (
    <>
      <Style.Container>
        <button onClick={() => setItem(Data)}>All <span>{Data.length}</span></button>
        {menuItems.map((Val, id) => {
          return (
            <button onClick={() => filterItem(Val)} key={id}>
              {Val}
            </button>
          );
        })}
      </Style.Container>
    </>
  );
};

export default Buttons;
