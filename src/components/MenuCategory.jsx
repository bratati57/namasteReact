import MenuItem from "./MenuItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../reduxStore/cartSlice"
const MenuCategory = ({
  categoryToOpen,
  setCategoryToOpen,
  categoryMenu,
  categoryTitle,
  categoryIndex,
}) => {
  const dispatch=useDispatch()
  const handleClick = () => {
    setCategoryToOpen(categoryIndex);
  };
  const handleStoreItem=(itemInside)=>{
    dispatch(addItem(itemInside))
    console.log("clicked", itemInside)
  }
  return (
   <div onClick={handleClick} className="text-md w-6/12 p-1 m-auto border border-amber-100 rounded-xl my-2">
      <div className="flex justify-between p-2 text-lg text-left font-bold ">
        <span>{categoryTitle}</span>
        <span>{categoryIndex===categoryToOpen?"🔺":"🔻"}</span>
      </div>
      {categoryIndex===categoryToOpen && categoryMenu && categoryMenu.map((item) => {
        const itemInside = item?.card?.info;
        return <MenuItem  key={itemInside?.id} itemInside={itemInside} handleStoreItem={handleStoreItem} />
      })}
    </div>
  );
};
export default MenuCategory;
