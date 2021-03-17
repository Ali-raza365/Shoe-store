import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Product from "./Product";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  main: {
    width: "90%",
    minHeight: "100vh",
    paddingTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "auto auto",
    background: "transparent",
    boxShadow: "0px 0px 5px 5px #ccc;",
  },
});

function Products() {
  const classes = useStyles();

  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <Container maxWidth="xl" className={classes.main}>
      {products.map((product, index) => {
        return <Product key={index} products={product} />;
      })}
    </Container>
  );
}

export default Products;
