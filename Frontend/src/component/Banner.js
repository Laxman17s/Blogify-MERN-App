import React from "react";

import { Box, styled } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Banner = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <ArrowBackRoundedIcon />
          <ImageContainer>
            <img
              src="./image/minimalist.avif"
              alt="image"
              height="100%"
              width="90%"
            />
          </ImageContainer>
          <ArrowForwardRoundedIcon />
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default Banner;

const Wrapper = styled(Box)`
  width: 100vw;
  height: 40vh;
  background-color: grey;
  padding: 0 10px;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled(Box)`
  height: 100%;
  width: 90%;
  object-fit: cover;
`;
