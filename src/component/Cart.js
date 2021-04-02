import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CartProducts from "./CartProducts";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GetTotal } from "../redux/action";

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "100vh",
  },
  btn: {
    backgroundColor: "black",
    color: "white",
  },
  checkoutbtn: {
    backgroundColor: "black",
    color: "white",
    width: "80%",
  },
  card: {
    minHeight: 300,
    width: "34%",
    position: "fixed",
    right: '2%',
    top: 80,
  },
  title: {
    fontSize: 35,
  },
  tax: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  subtotal: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
  },
  total: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
  },
});

function Cart() {
  useEffect(() => {
    gettotal();
  }, []);
  const res = useSelector((state) => state);
  let items = res.Cart;
  let total = res.Total;
  const dispatch = useDispatch();
  const gettotal = () => {
    dispatch(GetTotal());
  };

  // let sum = 0;
  // let subtotal = items.forEach(function (value, index, arry) {
  //   total += value.price;
  // });
  // console.log(sum);
  // settotal(subtotal);
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.main}>
      {items.length ? (
        items.map((item, ind) => (
          <CartProducts gettotal={gettotal} key={ind} Cart={item} />
        ))
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>No Product Found In Cart</h1>
          <br />
          <Link to="/">
            <Button variant="contained" className={classes.btn}>
              Go Back To Shopping
            </Button>
          </Link>
        </div>
      )}
      {items.length ? (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom component="h1">
              Summary
            </Typography>
            <Typography
              component="h3"
              gutterBottom
              className={classes.subtotal}
            >
              <span>Subtotal</span> <span>$ {total.toFixed(2)}</span>
            </Typography>
            <Typography component="h3" gutterBottom className={classes.tax}>
              <span>Tax</span> <span>0.0</span>
            </Typography>
            <hr />
            <Typography
              // variant="body1"
              component="h4"
              className={classes.total}
              gutterBottom
            >
              <span>Total</span> <span>$ {total.toFixed(2)}</span>
            </Typography>
          </CardContent>
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Button
              variant="contained"
              className={classes.checkoutbtn}
              onClick={() => {
                alert("plaese select your payment method");
              }}
            >
              Checkout
            </Button>
          </div>
        </Card>
      ) : null}
    </Container>
  );
}

export default Cart;
