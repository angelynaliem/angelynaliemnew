import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//This function keeps page transition smooth so that it goes to the very top whenever page transition happens.

const ScrollTransition = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTransition;
