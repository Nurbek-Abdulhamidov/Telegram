import * as Style from "./style";
import Data from "../../Data/Data";

const Buttons = ({ setItem, menuItems, filterItem }) => {
  return (
    <>
      <Style.Container>
        <button onClick={() => setItem(Data)}>
          All
          <span>{Data.length}</span>
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              
              key={id}
              onClick={() => {
                filterItem(Val);
              }}
            >
              {Val}
            </button>
          );
        })}
      </Style.Container>
    </>
  );
};

export default Buttons;
