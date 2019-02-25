import React from "react"
import sideAd from "../../img/ok_corral_ad.png";

const AdDisplay = () => {
  return (
    <div className="ad_space">
    <a href="https://github.com/crymall/ok_corral">
    <img  src={sideAd} alt="" className="side_ad" />
    </a>
    </div>
  )
}

export default AdDisplay
