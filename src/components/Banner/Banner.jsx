import React from "react";

import bannerImage from "../../assets/Ghostpine_Banner.jpg";

function Banner() {
  return (
    <div>
      <img
        src={bannerImage}
        alt="commerce.js"
        style={{ width: "100%", maxHeight: "25vh" }}
      />
    </div>
  );
}

export default Banner;
