import React, { useState } from "react";
import "./ScrollToTop.css";
import { animateScroll } from "react-scroll";
import ArrowUp from "@material-ui/icons/ArrowUpwardRounded";

const ScrollToTop = () => {
  const [visible, setVisiblity] = useState(false);

  //add and show the btn
  window.addEventListener("scroll", () => {
    window.scrollY >= 600 ? setVisiblity(true) : setVisiblity(false);
  });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scroll-to-top"
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    >
      <ArrowUp
        className="arrow-icon"
        style={{
          visibility: { visible },
        }}
      />
    </div>
  );
};

export default ScrollToTop;
