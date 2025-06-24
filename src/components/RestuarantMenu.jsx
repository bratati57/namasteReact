import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
const RestuarantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestuarantMenu(resId);

  if (resMenu === null) return <Shimmer />;
  const nameOfRes = resMenu?.cards[0]?.card?.card?.text;
  const menu =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;
  console.log("menu", menu);

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="text-xl font-bold p-2">{nameOfRes}</h1>
      <h2 className="text-md font-medium p-2">Menu:</h2>
      {menu.map((item) => {
        const itemInside = item?.card?.info;
        return (
          <div className="text-md w-6/12 p-2 m-auto" key={itemInside?.id}>
          <div className="m-1 p-4 bg-amber-100">
            <h3>
              {itemInside?.name} - Rs. {itemInside?.price / 100}
            </h3>
            <img
            />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
