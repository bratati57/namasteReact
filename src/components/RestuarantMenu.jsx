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
    <div className="res-menu">
      <h1>{nameOfRes}</h1>
      <h2>Menu:</h2>
      {/* {menu.map((item) => {
        const itemInside = item?.card?.info;
        return (
          <div key={itemInside?.id}>
            <h3>
              {itemInside?.name} - Rs. {itemInside?.price / 100}
            </h3>
          </div>
        );
      })} */}
    </div>
  );
};

export default RestuarantMenu;
