import * as Style from './style'

const SearchPanel = () => {
  return (
    <Style.Container>
      <input placeholder='Search for messages or users'/>
      <i class="fa-solid fa-magnifying-glass"></i>
    </Style.Container>
  )
}

export default SearchPanel