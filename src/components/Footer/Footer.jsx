import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 mt-25 py-5 pt-[80px] px-[8vw]" id="footer">
      <div className="footer-content w-full grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-[80px]">

        <div className="footer-content-left md:col-span-2 flex flex-col items-start gap-5">
          <img src={assets.logo} alt="footer-logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            eius ad a sint impedit eligendi eum deserunt magni. Cupiditate,
            sequi laborum voluptates enim quae odio fugit praesentium qui
            provident voluptatem!
          </p>
          <div className="footer social-icons flex mt-5 gap-5">
            <img className="w-[40px] cursor-pointer active:bg-blue-400 hover:bg-blue-600 hover:-translate-y-2 transition rounded-full" src={assets.facebook_icon} alt="socail-icon" />
            <img className="w-[40px] cursor-pointer active:bg-blue-400 hover:bg-blue-600 hover:-translate-y-2 transition rounded-full" src={assets.twitter_icon} alt="socail-icon" />
            <img className="w-[40px] cursor-pointer active:bg-blue-400 hover:bg-blue-600 hover:-translate-y-2 transition rounded-full" src={assets.linkedin_icon} alt="socail-icon" />
          </div>
        </div>

        <div className="footer-content-center flex flex-col items-start gap-5">
          <h2 className="text-2xl font-medium">Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-rigth flex flex-col items-start gap-5">
          <h2 className="text-2xl font-medium">GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+201069392346">+20-106-939-2346</a></li>
            <li><a href="mailto:mohamdayman35@gmail.com">mohamdayman35@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <hr className="w-full h-0.5 my-5 mx-0 border-0 bg-gray-500" />
      <p className="footer-copyRight">
        Copyright {year} &copy; Tomato.com - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
