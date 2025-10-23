import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

function LogInPopUp({setShowLogin}) {
  const [currState, setCurrState] = useState("Sing Up");

  return (
    <div className="login-popup z-1 w-full h-full bg-[#00000090] grid fixed">
      <form
        action=""
        className="logint-popup-container place-self-center w-[23vw] min-w-[330px] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7.5 rounded-2xl text-sm animate-fadeIn"
      >
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="text-2xl">{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="Close (X)"
            className="cursor-pointer w-[16px]"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Sing Up" && (
            <input type="text" className="input-field" placeholder="Your Name" required />
          )}
          <input type="email" className="input-field" placeholder="Email Address" required />
          <input type="password" className="input-field" placeholder="Password" required />
        </div>
        <button className="p-2.5 rounded text-white bg-tomato text-sm cursor-pointer active:bg-tomato/70" type="submit">
          {currState === "Sing Up" ? "Create an Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-2 -mt-3">
          <input type="checkbox"  className="mt-1.5"  required />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "login" ? (
          <p>
            Create A new Account?{" "}
            <span className="form-span" onClick={() => setCurrState("Sing Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span className="form-span" onClick={() => setCurrState("login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LogInPopUp;
