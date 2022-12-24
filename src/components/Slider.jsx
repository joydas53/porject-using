import React, { useEffect, useMemo, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import preArrow from "/images/left_arrow.png";
import nextArrow from "/images/right_arrow.png";

const slideShowTmp = [
  {
    title: "slide 1",
    bgCol: "red",
    info: "lorem Ipsum iojfwef ji foisaej fwi ooiweajrf iwajrp jsufh iojf shj jsoi",
  },
  {
    title: "slide 2",
    bgCol: "cyan",
    info: "lorem Ipsum iojfwef ji foisaej fwi ooiweajrf iwajrp jsufh iojf shj jsoi",
  },
  {
    title: "slide 3",
    bgCol: "blue",
    info: "lorem Ipsum iojfwef ji foisaej fwi ooiweajrf iwajrp jsufh iojf shj jsoi",
  },
  {
    title: "slide 4",
    bgCol: "pink",
    info: "lorem Ipsum iojfwef ji foisaej fwi ooiweajrf iwajrp jsufh iojf shj jsoi",
  },
  {
    title: "slide 5",
    bgCol: "violet",
    info: "lorem Ipsum iojfwef ji foisaej fwi ooiweajrf iwajrp jsufh iojf shj jsoi",
  },
];

export function useWindowSize() {
  const [screenSize, setScreenSize] = useState({
    screenWidth: undefined,
    screenHeight: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
function Slider() {
  const screenSize = useWindowSize();
  const properties = {
    prevArrow: (
      <button
        className="slider_btn_pre"
        style={{
          margin: "0 auto",
          padding: "5pt 8pt",
          fontWeight: "bold",
          backgroundColor: "#0000",
          border: "none",
        }}
      >
        <img width={20} height={35} src={preArrow} alt="" />
      </button>
    ),
    nextArrow: (
      <button
        className="slider_btn_next"
        style={{
          margin: "0 auto",
          padding: "5pt 8pt",
          fontWeight: "bold",
          backgroundColor: "#0000",
          border: "none",
        }}
      >
        <img width={20} height={35} src={nextArrow} alt="" />
      </button>
    ),
  };
  let detectMobileSize = screenSize.screenWidth < 750;
  const card = useMemo(() => {
    return (
      <div>
        <Slide
          {...properties}
          slidesToScroll={1}
          slidesToShow={detectMobileSize ? 1 : 3}
          indicators={detectMobileSize}
          autoplay={false}
          transitionDuration={250}
          cssClass={"slider"}
        >
          {slideShowTmp.map((element) => {
            return (
              <div
                style={{
                  backgroundColor: element.bgCol,
                  minWidth: "100px",
                  width: "80%",
                  height: "250px",
                  textAlign: "center",
                  padding: "20px 30px",
                  margin: "0 auto",
                  borderRadius: "10px",
                }}
              >
                <h2>{element.title}</h2>
                <p>{element.info}</p>
              </div>
            );
          })}
        </Slide>
      </div>
    );
  }, [detectMobileSize]);
  return <div style={{ width: "80%", margin: "40pt auto" }}>{card}</div>;
}

export default Slider;
