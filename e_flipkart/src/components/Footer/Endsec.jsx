import { Box, styled } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 65px;
  overflow: hidden;
`;

const Component = styled(Box)`
  color: white;
  align-items: center;
  font-size: 14px;
`;

const Endsec = () => {
  const Card =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg";

  return (
    <Container>
      <Component>
        <WorkIcon style={{ color: "gold", fontSize: 16 }} />
        &nbsp;&nbsp; Become a Seller
      </Component>
      <Component>
        <StarsIcon style={{ color: "gold", fontSize: 16 }} />
        &nbsp;&nbsp; Advertise
      </Component>
      <Component>
        <CardGiftcardIcon style={{ color: "gold", fontSize: 16 }} />
        &nbsp;&nbsp; Gift Cards
      </Component>
      <Component>
        <HelpIcon style={{ color: "gold", fontSize: 16 }} />
        &nbsp;&nbsp; Help Center
      </Component>
      <Box style={{color:"#fff"}}>© 2007-2023 Flipkart.com</Box>
      <Box>
        <img src={Card} alt="offer" />
      </Box>
    </Container>
  );
};

export default Endsec;
