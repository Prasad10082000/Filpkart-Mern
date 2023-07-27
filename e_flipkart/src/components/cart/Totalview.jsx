import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const Heading = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
const Head = styled(Typography)`
  color: #878787;
`;
const Comp = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price=styled(Box)`
float: right;
`
const Totalview = ({ cartItems }) => {
    const [price ,setPrice]=useState(0);
    const [discount ,setDiscount]=useState(0);

    useEffect(()=>{
      totalAmount();
    },[cartItems])

    const totalAmount = () =>{
      let price = 0 , discount = 0;
      cartItems.map(item=>{
        price += item.price.mrp;
        discount += (item.price.mrp - item.price.cost)
      })
      setPrice(price);
      setDiscount(discount);
    }
  return (
    <Box>
      <Heading>
        <Head>PRICE DETAILS</Head>
      </Heading>
      <Comp>  
        <Typography>
          Price {cartItems?.length} items
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span" color={"green"}>-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span" color={"green"}>Free</Price>
        </Typography>
        <Typography variant="h6" style={{marginBottom:"20px"}}>
          Total Amount
          <Price component="span">₹{price-discount}</Price>
        </Typography>
        <Typography style={{color:"green",fontWeight:500}}>You will save ₹{discount} on this order</Typography>
      </Comp>
    </Box>
  );
};

export default Totalview;
