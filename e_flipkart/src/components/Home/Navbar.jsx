import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import { navData } from '../../data';


const Container=styled(Box)(({theme})=>({
    display:"flex",
    margin:"55px 130px 0 130px",
    justifyContent: "space-between",
    overflow:"hidden",
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}))


const Texts=styled(Typography)`
font-size: 14px;
font-weight: 600;
font-family: inherit;
`

const Wrapper=styled(Box)`
    padding: 12px 8px;
    text-align: center;
`

const Navbar = () => {
  return (
    <Box style={{background:"#fff"}}>
          <Container>
        {
            navData.map(data=>(
                <Wrapper>
                    <img src={data.url} alt="Not Found" style={{width:64}}/>
                    <Texts>{data.text}</Texts>
                </Wrapper>

            ))
        }
    </Container>  
    </Box>

  )
}

export default Navbar;