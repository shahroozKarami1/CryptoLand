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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <CustomBox>
      <Fab
        onClick={scrollHandler}
        sx={{
          backgroundImage: ` var(--base-gradient-color)`,
        }}
      >
        <ArrowUpwardIcon sx={{ color: "#fff" }} />
      </Fab>
    </CustomBox>
  );
};

export default FabIcon;
