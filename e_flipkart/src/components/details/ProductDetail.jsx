import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const Badge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ProductDetail = ({ product }) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <Badge /> Get extra 20% off upto ₹50 on 1 item(5) T&C{" "}
        </Typography>
        <Typography>
          <Badge /> Get extra 13% off (price inclusive of discount) T&C
        </Typography>
        <Typography>
          <Badge /> Sign up for flipkart pay Later and get flipkart Gift card
          worth ₹100 Know More{" "}
        </Typography>
        <Typography>
          <Badge /> Buy 2 items save 5% Buy 3 or more save 10% T&C
        </Typography>
        <Typography>
          <Badge /> 5% Cashback on Flipkart Axis Bank card
        </Typography>
        <Typography>
          <Badge /> No Cost EMI on Bajaj Finserv EMI Card value above ₹2999 T&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>View More sellers starting From ₹166</Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
              <TableCell colSpan={2}>
            <img src={adURL} alt="ad" style={{width:390}}/>
          </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>
                {product.description}
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
