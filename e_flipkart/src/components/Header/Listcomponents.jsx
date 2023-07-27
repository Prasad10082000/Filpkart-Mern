import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import { Datacontext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  color: "#fff",
  "& > button, & > p ,& > div": {
    marginRight: 40,
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    color: "black",
  },
}));

const CartWrap = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;

const LoginBtn = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;
const Listcomponents = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(Datacontext);
  const { cartItems } = useSelector(state=>state.Cart)
  const openDialog = () => {
    setOpen(true);
  };



  return (
    <Container>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginBtn variant="contained" onClick={() => openDialog()}>
          Login
        </LoginBtn>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <CartWrap to="/cart">
        <Badge badgeContent={cartItems?.length} color="warning">
          <ShoppingCart />
          <Typography>Cart</Typography>
        </Badge>
      </CartWrap>
      <Login open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Listcomponents;
