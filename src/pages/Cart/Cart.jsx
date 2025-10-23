import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreCountext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart mt-25">
      <div className="cart-items">
        <div className="cart-items-title ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p className="col-span-2 sm:col-span-1 ">Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item my-2.5 text-black">
                  <img src={item.image} alt="image" className="w-20 rounded" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className="col-span-2 sm:col-span-1 ">{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p className="cursor-pointer text-lg hover:text-tomato" onClick={(() => removeFromCart(item._id))}>X</p>
                </div>
                <hr className="h-0.25 bg-[#2e2e2e] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="flex-col-reverse cart-bottom mt-20 flex sm:flex-row justify-between gap-5 md:gap-[12vw]">
        <div className="cart-total flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-semibold">Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2.5" />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2.5" />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
            <button onClick = {()=> navigate('/order')} className="text-white active:bg-tomato/90 bg-tomato cursor-pointer w-50 md:w-[15vw] py-3 rounded text-sm" >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-1 ">
          <div className="mt-5 mb-10 md:my-0">
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input mt-2.5 flex justify-between items-center px-2 bg-[#eaeaea] rounded">
              <input className="bg-transparent border-none outline-none pe-2.5" type="text" placeholder="Promo Code" />
              <button type= "submit" className="cursor-pointer w-38 active:bg-black/90  md:w[10vw] py-4 px-4 bg-black border-none text-white rounded" >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
