import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/productActions";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Container = styled(Box)`
background-color: #F2F2F2;
margin-top: 55px;
`

const Component = styled(Grid)(({theme})=>({
    backgroundColor: "#fff",
    display: "flex",
    [theme.breakpoints.down("md")]:{
      margin:0
}
}))

const RightContainer=styled(Grid)`
    margin-top: 50px;
    padding-left: 25px;
    & > p{
      margin-top: 10px;
    }
`

const DetailView = () => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector(state => state.getProductDetails);
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);
  console.log(product);
  return (
    <Container>
      {
        product && Object.keys(product).length &&
        <Component container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop:5,color:"#878787",fontSize:14}}>8 Ratings & 1 Reviews
                <Box component="span">
                    <img src={fassured} style={{width:77,marginLeft:20}} alt="Assured" />
                </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:"#388E3C"}}>{product.price.discount} off</Box>
            </Typography>
            <ProductDetail product={product}/>
          </RightContainer>
        </Component>
      }
    </Container>
  );
};

export default DetailView;
