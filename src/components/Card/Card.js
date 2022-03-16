import NotFound from "../../shared/NotFound/NotFound";
import * as Style from "./style";

const Card = ({ item, inputText, inputSubText,characterResults }) => {
  // const filterData = item.filter((el) => {
  //   if (inputText === "") {
  //     return el;
  //   } else {
  //     return (
  //       el.title.toLowerCase().includes(inputText) ||
  //       el.desc.toLowerCase().includes(inputSubText)
  //     );
  //   }
  // });

  return (
    <>
      <div>
        <div>
          {characterResults.map((Val) => {
              return (
                <Style.Card key={Val.id}>
                  <div>
                    <img src={Val.img} alt={Val.title} className="photo w-75" />
                  </div>
                  <div>
                    <div>
                      {Val.title}
                      {Val.price}
                    </div>
                    <Style.ItemText>{Val.desc}</Style.ItemText>
                  </div>
                </Style.Card>
              );
            })}
          <div>{characterResults.length === 0 && item !== "" && <NotFound />}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
