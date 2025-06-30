import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import MenuCategory from "./MenuCategory";
const RestuarantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestuarantMenu(resId);
  const [categoryToOpen, setCategoryToOpen] = useState(null);
  if (resMenu === null) return <Shimmer />;
  const nameOfRes = resMenu?.cards[0]?.card?.card?.text;
   const categoryDetails =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="m-2 p-2 text-center">
      <h1 className="text-2xl font-bold p-2">{nameOfRes}</h1>
      <h2 className="text-md font-medium p-2">Menu:</h2>

      {categoryDetails.map((eachCategory, index) => {
        if (index > 0) {
          const categoryTitle = eachCategory?.card?.card?.title;
          const categoryMenu = eachCategory?.card?.card?.itemCards;
          if (categoryMenu)
            return (
              <MenuCategory
                categoryToOpen={categoryToOpen}
                setCategoryToOpen={setCategoryToOpen}
                categoryIndex={index}
                key={`${categoryTitle}+${index}`}
                categoryMenu={categoryMenu}
                categoryTitle={categoryTitle}
              />
            );
        }
      })}
    </div>
  );
};

export default RestuarantMenu;
