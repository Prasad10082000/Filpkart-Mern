import { Box, styled } from "@mui/material";
import React from "react";
import Slide from "./Slide";

const Container=styled(Box)`
    display: flex;
    width: 100%;
    overflow: hidden;
`
const Containerleft=styled(Box)(({theme})=>({
   width: "83%",
  [theme.breakpoints.down("lg")]:{
    width:"100%"
  }
}))

const Containerright=styled(Box)(({theme})=>({
background: "#fff",
padding: 5,
marginTop:10,
marginLeft:10,
width:"17%",
textAlign:"center",
[theme.breakpoints.down('lg')]:{
  display:"none"
}
}))

const Midslide = ({ products, title, timer }) => {
    
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Container>
      <Containerleft>
        <Slide products={products} title="Deal of the Day" timer={true} />
      </Containerleft>
      <Containerright>
        <img src={adURL} alt="ad" style={{width:217}} />
      </Containerright>
    </Container>
  );
};

export default Midslide;
