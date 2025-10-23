import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreCountext";

function PlaceOrder() {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className="place-order flex items-start justify-between gap-12.5 mt-25">
      <div className="place-order-left w-full">
        <p className="title text-3xl font-semibold mb-12.5 ">Delivery Information</p>

        <div className="multi-fileds">
          <input type="text" className="mb-3.5 w-full p-2.5 border-1 border-[#c5c5c5] rounded outline-tomato"  placeholder="First Name" />
          <input type="text" className="order-input" placeholder="Last Name" />
        </div>

        <input type="email" className="order-input"  placeholder="Email Address" />
        <input type="text"  className="order-input" placeholder="Street" />

        <div className="multi-fileds">
          <input type="text" className="order-input"placeholder="City" />
          <input type="text" className="order-input" placeholder="State" />
        </div>

        <div className="multi-fileds">
          <input type="text" className="order-input" placeholder="Zip code" />
          <input type="text" className="order-input" placeholder="Country" />
        </div>

        <input type="text" className="order-input" placeholder="phone" />
      </div>
      <div className="place-order-right w-full">
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
          <button
            className="text-white mt-7.5 active:bg-tomato/90 bg-tomato cursor-pointer w-50 md:w-[15vw] py-3 rounded text-sm"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
