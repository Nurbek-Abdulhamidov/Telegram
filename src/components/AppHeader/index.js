import * as Style from "./style"

const AppHeader = () => {
  return (
    <Style.Container>
      <Style.Edit><a href="#">Edit</a></Style.Edit>
      <Style.Chat><h1>Chats</h1></Style.Chat>
      <Style.Edit><a href="#"><i className="fa-solid fa-pen-to-square"></i></a></Style.Edit>
    </Style.Container>
  )
}

export default AppHeader