import * as Style from "./style";
import Data from "../../Data/Data";
import Card from "../Card/Card";
import { useMemo, useState } from "react";
import Buttons from "../Buttons";
import SearchPanel from "../SearchPanel";
import debounce from "lodash.debounce";
import Fuse from "fuse.js";

const PostList = () => {
  const [item, setItem] = useState(Data);
  const [inputText, setInputText] = useState("");
  const [query, updateQuery] = useState("");

  // Fuzzy function
  const fuse = new Fuse(item, {
    keys: ["title", "desc"],
    includeScore: true,
  });

  const results = fuse.search(query);
  const characterResults = query ? results.map((item) => item.item) : item;

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    updateQuery(lowerCase);
  };

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  console.log(characterResults, "characterLists");

  // Debounce function
  const debouncedResults = useMemo(() => {
    return debounce(inputHandler, 700);
  }, [inputText]);

  // Button category
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <Style.PostContainer>
      <SearchPanel
        onSearch={onSearch}
        query={query}
        inputHandler={debouncedResults}
      />
      <Buttons
        menuItems={menuItems}
        filterItem={filterItem}
        setItem={setItem}
      />
      <div>
        <Card
          characterResults={characterResults}
          item={item}
          inputText={inputText}
        />
      </div>
    </Style.PostContainer>
  );
};

export default PostList;
