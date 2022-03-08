import * as Style from "./style";
import Data from "../../Data/Data";
import Card from "../Card/Card";
import { useState } from "react";
import Buttons from "../Buttons";

const PostList = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <Style.PostContainer>
      <Buttons
        menuItems={menuItems}
        filterItem={filterItem}
        setItem={setItem}
      />
      <div className="row">
        <Card item={item} />
      </div>
    </Style.PostContainer>
  );
};

export default PostList;
