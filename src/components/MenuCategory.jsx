import MenuItem from "./MenuItem";
import { useState } from "react";
const MenuCategory = ({
  categoryToOpen,
  setCategoryToOpen,
  categoryMenu,
  categoryTitle,
  categoryIndex,
}) => {
  const handleClick = () => {
    setCategoryToOpen(categoryIndex);
  };
  return (
   <div onClick={handleClick} className="text-md w-6/12 p-1 m-auto border border-amber-100 rounded-xl my-2">
      <div className="flex justify-between p-2 text-lg text-left font-bold ">
        <span>{categoryTitle}</span>
        <span>{categoryIndex===categoryToOpen?"🔺":"🔻"}</span>
      </div>
      {categoryIndex===categoryToOpen && categoryMenu && categoryMenu.map((item) => {
        const itemInside = item?.card?.info;
        return <MenuItem key={itemInside?.id} itemInside={itemInside} />;
      })}
    </div>
  );
};
export default MenuCategory;
