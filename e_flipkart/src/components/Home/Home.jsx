import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Box, styled } from "@mui/material";
import Slidereff from "./Slidereff";
import { getProducts } from "../../redux/action/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import Midslide from "./Midslide";
import Midsection from "./Midsection";
import Sbi from "./Sbi";
import CenterSection from "./CenterSection";
import Endsection from "./EndSection";
import Footer from "../Footer/Footer";

const Wapper = styled(Box)`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Wapper>
        <Slidereff />
        <Sbi/>
        <Midslide products={products} title="Deal of the Day" timer={true} />
        <Midsection/>
        <Slide products={products} title="Top Offers" timer={false} />
        <Slide products={products} title="Discount For You" timer={false} />
        <CenterSection/>
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Offers" timer={false}  />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Endsection/>
      </Wapper>
      <Footer/>
    </>
  );
};

export default Home;
