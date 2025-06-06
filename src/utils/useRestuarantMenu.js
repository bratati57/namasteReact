import { useState, useEffect } from "react";
import { RES_MENU } from "./constants";
const useRestuarantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    getResMenuDetails();
  }, []);
  const getResMenuDetails = async () => {
    const res = await fetch(RES_MENU + resId);
    const resJson = await res.json();
    console.log(
      resJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setResMenu(resJson?.data);
  };

  return resMenu;
};
export default useRestuarantMenu;
