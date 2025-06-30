import { RES_MENU_ITEM } from "../utils/constants";
const MenuItem = ({ itemInside }) => {
  console.log("itemInside", itemInside);
  return (
<>
    <div className="flex justify-between rounded-xl hover:bg-amber-100 my-4 p-2 bg-amber-50">
      <div className="px-1 w-4/5 text-left">
        <h2 className="text-lg font-bold">{itemInside?.name} </h2>
        {itemInside?.ratings?.aggregatedRating?.rating && (
          <h3>
            🌟 <span className="text-green-800 text-md font-bold">
              {itemInside?.ratings?.aggregatedRating?.rating}
            </span>
          </h3>
        )}
        <h3 className="text-md" >Rs. {(itemInside?.price || itemInside?.defaultPrice) / 100}</h3>

        <p className="text-gray-600 text-sm text-wrap break-normal">{itemInside?.description}</p>
      </div>
      <div className="px-1">
        <button className="relative rounded-xl p-1 bg-black text-white">
          Add item
        </button>
        <img
          className="w-24 h-24 rounded-xl"
          src={`${RES_MENU_ITEM}${itemInside?.imageId}`}
          alt="menu-item"
        />
      </div>
    </div>
    </>
  );
};
export default MenuItem;
