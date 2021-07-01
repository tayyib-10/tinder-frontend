// modules
import React from "react";
import styled from "styled-components";

// Material-UI
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <SwipeButton>
      <Repeat>
        <ReplayIcon fontSize="large" />
      </Repeat>

      <Left>
        <CloseIcon fontSize="large" />
      </Left>

      <Star>
        <StarRateIcon fontSize="large" />
      </Star>

      <Right>
        <FavoriteIcon fontSize="large" />
      </Right>

      <Bolt>
          <FlashOnIcon />
      </Bolt>
    </SwipeButton>
  );
}

const SwipeButton = styled.div`
    position: fixed;
    bottom: 10vh;
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    & .MuiIconButton-root {
        background-color: white;
        box-shadow: 0 10px 53px 0 rgba(0, 0, 0, 0.3);
    }
`

const Repeat = styled(IconButton)`
    padding: 3vw !important;
    color: #f5b748 !important;
`

const Left = styled(IconButton)`
    padding: 3vw !important;
    color: #62b4f9 !important;
`
const Star = styled(IconButton)`
    padding: 3vw !important;
    color: #76e2b3 !important;
`

const Right = styled(IconButton)`
    padding: 3vw !important;
    color: #76e2b3 !important;
`

const Bolt = styled(IconButton)`
    padding: 3vw !important;
    color: #915dd1 !important;
`
export default SwipeButtons;
