import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import Listcomponents from "./Listcomponents";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Headerbar = styled(AppBar)`
  color: #2874f0;
  height: 55px;
`;

const HeaderWrapper = styled(Link)`
  margin-left: 12%;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  color: #fff;
  font-size: 10px;
  font-style: italic;
`;

const Iconimg = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CompBox = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuBtn = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

function Header(props) {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setopen] = useState(false);

  const handleopen = () => {
    setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };

  const list = () => (
    <Box style={{width:200}} onClick={handleclose}>
      <List>
        <ListItem>
          <Listcomponents />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Headerbar>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuBtn color="white" onClick={handleopen}>
          <MenuIcon />
        </MenuBtn>

        <Drawer open={open} onClose={handleclose}>
          {list()}
        </Drawer>

        <HeaderWrapper to={"/"}>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </SubHeading>
            <Iconimg src={subURL} alt="plusicon" />
          </Box>
        </HeaderWrapper>
        <Search />
        <CompBox>
          <Listcomponents />
        </CompBox>
      </Toolbar>
    </Headerbar>
  );
}

export default Header;
