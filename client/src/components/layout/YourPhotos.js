//import React, { Component } from "react";
import { Link } from "react-router-dom";
/*
class YourPhotos extends Component {
  render() {
    return (
      <div style={{ 
          marginLeft:"0px", 
          marginRight:"0px", 
          width:"100%",
          background: "#2D2F33",
          color:"white",
          maxWidth: "inherit"
           }} className="container">
        <div className="row top-banner-row" 
        style={{
          display: "flex",
          paddingTop: "20px",
          backgroundColor: "#c0aa3d",
          position: "relative",
          height: "300px"//,
         // clipPath: polygon( 0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw) )
                }}>
          <div className="col s4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2" style={{ fontSize:"2.30rem"}}>PHOTOSSSSS</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2" style={{ fontSize:"2.30rem"}}>Grab your Camera</h2>
              </div>
            </div>
          </div>
          <div className="col s4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2" style={{ fontSize:"2.30rem"}}>Find a Scenic Location</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2" style={{ fontSize:"2.30rem"}}>Look for the Crowds</h2>
              </div>
            </div>
          </div>
          <div className="col s4 info-box-banner">
            <div className="row">
              <div className="col s12 info-box-banner-client" style={{textAlign: "center"}}>
                <h2 className="banner-client-h2" style={{ fontSize:"2.30rem"}}>Get a Timeless Memory</h2>
              </div>
            </div>
            <hr className="header-hr" style={{width:"50%", color:"white"}} />
            <div className="row">
              <div className="col s12 info-box-banner-photographer" style={{textAlign: "center"}}>
                <h2 className="banner-photographer-h2" style={{ fontSize:"2.30rem"}}>Snap the Smiles</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12" style={{color:"white", textAlign: "center"}}>
            <h2 className="post-box-h2">Make Memories that will last a lifetime</h2>
            <div className="post-box-desc" style={{fontSize:"20px"}}>
              <p>Wish you had access to high quality photography when and where you need it?</p>
              <p>With PhotoSwami all you have to do is show up and photographers will be there ready to snap the perfect shot everytime</p>
              <p>It's simple! Once they take your photos it will be texted to you and you can choose your favorites to purchase</p>
              <p>Don't like the photos? No problem, have more taken or decide not to buy them there is no obligation</p>
            </div>
          </div>
        </div>
        <div className="footer-banner row" style={{
          marginTop: "20px",
          //clippath
          minHeight:"200px",
          backgroundColor:"#c0aa3d"
        }}>
        </div>
      </div>
    );
  }
}

export default YourPhotos;
*/

import React, { useState, useEffect, Component } from "react";

const Checkmark = ({ selected }) => (
  <div
    style={
      selected
        ? { left: "4px", top: "4px", position: "absolute", zIndex: "1" }
        : { display: "none" }
    }
  >
    <svg
      style={{ fill: "white", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <circle cx="12.5" cy="12.2" r="8.292" />
    </svg>
    <svg
      style={{ fill: "#06befa", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  </div>
);

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const YourPhotos = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""}
    >
      <Checkmark selected={isSelected ? true : false} />
      <img
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
        onClick={handleOnClick}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default YourPhotos;

