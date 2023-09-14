import ScrollToTop from "react-scroll-to-top";
import React from "react";
import style from "./footer.module.css";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { BsInstagram, BsEnvelope, BsTwitter, BsArrowUp } from "react-icons/bs";


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_sub}>
        {/* <ScrollToTop
    className={style.scrollArrow}
     color="#ffffff"
      smooth /> */}
        {/* <ScrollToTop
        className={style.scrollText}
        smooth
        color="#ffffff"
        component={<div> BACK TO TOP</div>}
      /> */}
        <div className={style.footer_cnt1}>
          <div className={style.footer_1st_div}>

         
          <ul className={style.footer_img_cntnr}>
            {/* <li><img  src={insta_logo}/></li>
      <li><img src={facebook_logo}/></li>
      <li><img src={facebookSvg}/></li>  */}
            <li>
              <FaFacebookF />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <FaPinterestP />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <BsEnvelope />
            </li>
          </ul>

          <div className={style.scrollArrow} onClick={scrollToTop}>
            <BsArrowUp />
          </div>
          <div className={style.scrollText} onClick={scrollToTop}>
            Back to Top
          </div>
        </div>
        <ul className={style.footer_2nd_div}>
          <li>All Categories</li>
          <li>Site Map</li>
          <li>About Us</li>
          <li>Help</li>
        </ul>

        </div>

        {/* <div > */}
      
        {/* </div> */}
        <div className={style.footer_cnt2}>
          <div className={style.footer_cnt3}>
          <div className={style.blue}>The Discovery Family of Networks </div>
<div>© 2022 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates.</div>
<div>All rights reserved.</div>

          </div>
          <div className={style.footer_cnt4}>
            <ul className={style.footer_advetise}>

          <li>Advertise</li>
<li>AdChoices</li>
<li>Privacy Notice</li>
<li>Visitor Agreement</li>
            </ul>
            <div className={style.california}>California Privacy Notice <div>Do Not Sell or Share My Personal Information</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
