import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styled from "styled-components";
const CustomBox = styled(Box)({
  position: "fixed",
  bottom: "50px",
  left: "50px",
  zIndex: "999",
});
const FabIcon = () => {
  function scrollHandler() {
    if (window.scrollY > 0) {
      window.scrollY = 0;
    }
  }
  return (
    <CustomBox>
      <Fab
        onClick={scrollHandler}
        sx={{ backgroundImage: "linear-gradient(to right, #8761a8, #f4929b)" }}
      >
        <ArrowUpwardIcon sx={{ color: "#fff" }} />
      </Fab>
    </CustomBox>
  );
};

export default FabIcon;
