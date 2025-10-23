import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../Context/StoreCountext";

function FoodItems({ id, name, price, description, image }) {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item m-auto w-2/3 md:w-full rounded-2xl shadow-2xl transition animate-fadeIn">
      <div className="food-item-img-container relative">
        <img src={image} className="rounded-t-2xl w-full " alt="img" />
        {!cartItem[id] ? (
          <img
            className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add_icon"
          />
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1.5 bg-white rounded-[50px]">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              className="cursor-pointer w-8 "
              alt="remove-icon"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add-icon"
              className="cursor-pointer w-8 "
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="foot-item-name-rating flex justify-between items-center mb-2">
          <p className="text-xl font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="starts" className="w-[70px]" />
        </div>
        <p className="food-item-description w-2/3  text-[#676767] text-sm">
          {description}
        </p>
        <p className="food-item-price my-1 text-tomato text-2xl font-semibold">
          ${price}
        </p>
      </div>
    </div>
  );
}
// 1:41:04

export default FoodItems;
