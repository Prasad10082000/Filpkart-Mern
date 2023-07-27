import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Endsec from "./Endsec";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 30px 65px 30px 65px;
  background-color: #172337;
  color: white;
  overflow: hidden;
`;

const Newbox = styled(Box)`
  width: 120px;
  & > p {
    font-size: 12px;
    margin-top: 2px;
  }
`;
const Addbox = styled(Box)`
  width: 280px;
  & > p {
    font-size: 12px;
  }
`;

const Heading = styled(Typography)`
  font-size: 12px;
  color: #878787;
  margin-bottom: 5px;
`;

const Border = styled(Box)`
  border-left: 1px solid #454d5e;
`;

const Footer = () => {
  return (
    <Box bgcolor={"#172337"}>
      <Container>
        <Newbox>
          <Heading>ABOUT</Heading>
          <Typography>Contact Us</Typography>
          <Typography>About Us</Typography>
          <Typography>Careers</Typography>
          <Typography>Flipkart Stories</Typography>
          <Typography>Press</Typography>
          <Typography>Flipkart Wholesale</Typography>
          <Typography>Corporate information</Typography>
        </Newbox>
        <Newbox>
          <Heading>HELP</Heading>
          <Typography>Payments</Typography>
          <Typography>Shopping</Typography>
          <Typography>Cancellation & Returns</Typography>
          <Typography>FAQ</Typography>
          <Typography>Report Infrigement</Typography>
        </Newbox>
        <Newbox>
          <Heading>CONSUMER POLICY</Heading>
          <Typography>Return Policy</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Security</Typography>
          <Typography>Privacy</Typography>
          <Typography>Site Map</Typography>
          <Typography>Grivance Redressal</Typography>
          <Typography>ERP Compliance</Typography>
        </Newbox>
        <Newbox>
          <Heading>SOCIAL</Heading>
          <Typography>Facebook</Typography>
          <Typography>Twitter</Typography>
          <Typography>YouTube</Typography>
        </Newbox>
        <Addbox>
          <Border>
            <Heading style={{ marginLeft: 40 }}>Mail Us:</Heading>
            <Typography style={{ fontSize: "12px", marginLeft: 40 }}>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Typography>
          </Border>
        </Addbox>
        <Addbox>
          <Heading>Registered Office Address:</Heading>
          <Typography>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            Telephone: 044-45614700
          </Typography>
        </Addbox>
      </Container>
      <Divider style={{ background: "#454d5e" }} />
 <Endsec/>
    </Box>
  );
};

export default Footer;
