import React from "react"
// import sideAd from "../../img/ok_corral_ad.png";
import front_page_banner from "../../img/front_page_banner.png";


const FrontPage = () => {
  return (
    <div className="front_page">
    <img src={front_page_banner} alt=""/>
    <p className="front_page_welcome">Your personal Reddit frontpage. Come here to check in with your favorite communities</p>
    <button className="front_page_create_post_button">CREATE POST</button>
    <button className="front_page_create_community_button">CREATE COMMUNITY</button>
    </div>
  )
}

export default FrontPage
