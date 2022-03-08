import AppHeader from "../AppHeader";
import PostList from "../PostList";
import SearchPanel from "../SearchPanel";
import * as Style from "./style.js";


function App() {

  return (
    <>
      <Style.Container>
        <AppHeader />
        <SearchPanel/>
        <PostList/>
      </Style.Container>
    </>
  );
}

export default App;
