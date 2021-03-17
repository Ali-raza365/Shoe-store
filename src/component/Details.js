import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct, AddToCart } from "../redux/action";

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "100vh",
    paddingTop: "50px",
  },
  root: {
    boxShadow: "0px 0px 2px 2px #ccc",
    width: "100%",
    minHeight: "600px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    padding: 10,
    marginLeft: 30,
    marginTop: 10,
  },
  desciption: {
    width: "400px",
    overflow: "hidden",
  },
  cover: {
    width: 400,
    minWidth: "290px",
    height: 400,
    objectFit: "cover",
    margin: "25px",
  },
  imgContainer: {
    marginTop: "10px",
    display: "flex",
  },
  sideImges: {
    width: "90px",
    height: "90px",
    marginRight: "10px",
    cursor: "pointer",
    border: "1px solid #ddd",
    objectFit: "cover",
  },
  btn: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "black",
    color: "white",
  },
});

function Details() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectedProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.Select);
  const [index, Setindex] = useState(0);
  const Imghandler = (index) => {
    Setindex(index);
  };
  const CartHandler = (id) => {
    dispatch(AddToCart(id));
  };

  if (product) {
    return (
      <Container maxWidth="xl" className={classes.main}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={product.src[index]}
            title="Live from space album cover"
          />
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body2" gutterBottom></Typography>
            <Typography variant="subtitle1" color="secondary">
              $ <b>{product.price}</b>
            </Typography>
            <Typography component="h5" variant="h5">
              {product.heading}
            </Typography>
            <p className={classes.desciption}>{product.desciption}</p>
            <div className={classes.imgContainer}>
              {product.src.map((img, ind) => {
                return (
                  <CardMedia
                    onClick={() => {
                      Imghandler(ind);
                    }}
                    key={ind}
                    className={classes.sideImges}
                    image={product.src[ind]}
                    style={index == ind && { border: "1px solid black" }}
                    title="Live from space album cover"
                  />
                );
              })}
            </div>
            <Button
              variant="contained"
              className={classes.btn}
              onClick={() => {
                CartHandler(product.id);
              }}
            >
              Add to cart
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  } else {
    return "loading";
  }
}

export default Details;
