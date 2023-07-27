import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addElipsis } from "../../utils/Util";
import Grpbtn from "./Buttongrp";
import { removeFromCart } from "../../redux/action/cartAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background-color: #fff;
`;

const Leftcomp=styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

const Smalltext=styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`
const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: black;
    font-weight: 600;
`
const Cartitem = ({ item }) => {
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const dispatch = useDispatch();
 const removeItem = (id) =>{
  dispatch(removeFromCart(id))
 }
  return (
    <Component>
      <Leftcomp>
        <img src={item.url} alt="product" style={{height:130,width:110}} />
        <Grpbtn/>
      </Leftcomp>
      <Box style={{margin:'20px 0'}}>
        <Typography>{addElipsis(item.title.longTitle)}</Typography>
        <Smalltext>Seller:RetailNet <Box component="span"><img src={fassured} alt="assured" style={{width:50,marginLeft:10}}/></Box></Smalltext>
        <Typography style={{margin:'20px 0'}}>
            <Box component="span" style={{fontSize:18,fontWeight:600}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:"#878787"}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{color:"#388E3C"}}>{item.price.discount} off</Box>
        </Typography>
        <Remove onClick={()=>removeItem(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default Cartitem;
