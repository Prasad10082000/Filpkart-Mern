import { Grid, styled } from "@mui/material";
import React from "react";
import { imageURL1 } from "../../data";


const Wrapperinner=styled(Grid)`
 padding: 10px 10px 0px;
`

const CenterSection = () => {
  return (
    <Grid container lg={12} sm={12} md={12} xs={12}>
      {imageURL1.map((image) => (
        <Wrapperinner item lg={4} md={6} sm={12} xs={12} >
          <img
            src={image}
            alt="banners"
            style={{ width: "100%"}}
          />
        </Wrapperinner>
      ))}
    </Grid>
  );
};

export default CenterSection;
