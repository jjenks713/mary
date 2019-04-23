import React from "react";

function Jumbotron({ children }) {

  const imgUrl = "https://images.wallpaperscraft.com/image/art_supplies_paints_brushes_109981_1920x1080.jpg";

  const backImage1 = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundSize: "100%",
    height: 600,
    clear: "both",
    paddingTop: 120,
    textAlign: "center",
  };

  return (
    <div
      style={ backImage1 }
      // className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
