import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action/productActions";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const SerchBox = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
  font-size: unset;
`;
const Iconbox = styled(Box)`
  padding: 5px;
  display: flex;
`;
const ListWrap = styled(List)`
  position: absolute;
  background-color: white;
  margin-top: 35px;
`;
const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const gettext = (text) => {
    setText(text);
  };

  return (
    <Container>
      <SerchBox
        placeholder="Search for products, brands and more"
        onChange={(e) => gettext(e.target.value)}
        value={text}
      />
      <Iconbox>
        <SearchIcon />
      </Iconbox>
      {text && (
        <ListWrap>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrap>
      )}
    </Container>
  );
};

export default Search;
