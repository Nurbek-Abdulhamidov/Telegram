import AppHeader from "../AppHeader";
import PostList from "../PostList";
import * as Style from "./style.js";


function App() {


  return (
    <>
      <Style.Container>
        <AppHeader />
        <PostList />
      </Style.Container>
    </>
  );
}

export default App;
