import * as Style from "./style";
import Data from "../../Data/Data";
import Card from "../Card/Card";
import { useEffect, useMemo, useState } from "react";
import Buttons from "../Buttons";
import SearchPanel from "../SearchPanel";
import debounce from "lodash.debounce";

const PostList = () => {
  const [item, setItem] = useState(Data);
  const [inputText, setInputText] = useState("");
  const [inputSubText, setInputSubText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  let inputHandle = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputSubText(lowerCase);
  };

  const debouncedResults = useMemo(() => {
    return debounce(inputHandler, 500);
  }, [inputText]);


  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <Style.PostContainer>
      <SearchPanel inputHandler={debouncedResults} inputHandle={inputHandle} />
      <Buttons
        menuItems={menuItems}
        filterItem={filterItem}
        setItem={setItem}
      />
      <div>
        <Card item={item} inputText={inputText} inputSubText={inputSubText} />
      </div>
    </Style.PostContainer>
  );
};

export default PostList;
