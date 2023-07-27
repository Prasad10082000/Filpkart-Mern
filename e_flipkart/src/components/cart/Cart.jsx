import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Cartitem from "./Cartitem";
import Totalview from "./Totalview";
import Emptycart from "./Emptycart";

const Container = styled(Grid)(({theme})=>({
    padding:"30px 135px",
    [theme.breakpoints.down('md')]:{
        padding:"15px 0px"
    }
}))

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;
const Buttonwrap = styled(Box)`
  padding: 16px 22px;
  background-color: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
  margin-top: 10px;
`;

const Btnplace = styled(Button)`
  margin-left: auto;
  display: flex;
  background-color: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComp = styled(Grid)(({theme})=>({
    paddingRight:"15px",
    [theme.breakpoints.down('md')]:{
         marginBottom:15
    }
}))


const Cart = () => {
  const { cartItems } = useSelector((state) => state.Cart);
  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComp item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <Cartitem item={item} />
            ))}
            <Buttonwrap>
              <Btnplace>Place Order</Btnplace>
            </Buttonwrap>
          </LeftComp>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Totalview cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <Emptycart/>
      )}
    </>
  );
};

export default Cart;
