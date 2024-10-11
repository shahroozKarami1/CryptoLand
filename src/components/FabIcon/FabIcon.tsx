import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "styled-components";
import { useEffect, useState } from "react";
const CustomBox = styled(Box)({
  position: "fixed",
  bottom: "50px",
  left: "50px",
});
const FabIcon = () => {
  let [isFab, setIsFab] = useState(false);
  const HandlerScroll = () => {
    if (window.scrollY > 0) {
      setIsFab(true);
    } else {
      setIsFab(false);
    }
  };
  function  goToTopScroll   ( ) {
      window.scrollTo ({
        top :  0  ,  
        behavior : "smooth"
      })
  }
  useEffect(() => {
    window.addEventListener("scroll", HandlerScroll);
    return () => {
      window.removeEventListener("scroll", HandlerScroll);
    };
  }, []);

  return (
    <>
      {
        <CustomBox>
          <Fab
            onClick={goToTopScroll}
            sx={{
              backgroundImage: ` var(--base-gradient-color)`,
              display: `${isFab ? "block" : "none"}`,
            }}
          >
            <ArrowUpwardIcon sx={{ color: "#fff" }} />
          </Fab>
        </CustomBox>
      }
    </>
  );
};

export default FabIcon;
