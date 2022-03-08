import * as Style from "./style"
 
const Card = ({ item }) => {            
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <Style.Card key={Val.id} >
                <div className="card-img-top text-center">
                  <img src={Val.img} alt={Val.title} className="photo w-75" />
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {Val.title}
                    {Val.price}
                  </div>
                  <Style.ItemText>{Val.desc}</Style.ItemText>
                </div>
              </Style.Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Card;