import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";
import { ChangeQuantity, Remove } from "../redux/action";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "950px",
    minHeight: "300px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "10px 20px",
    marginTop: 10,
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
    width: 200,
    height: 200,
    objectFit: "cover",
    margin: "10px 20px",
  },
  qty: {
    marginLeft: 5,
    width: 30,
    verticalAlign: " text-bottom",
    paddingLeft: 6,
  },
  total: {
    marginTop: 30,
  },
  remove: {
    position: "absolute",
    top: 20,
    right: 20,
    cursor: "pointer",
  },
});

function CartProducts({ Cart, gettotal }) {
  const [Qty, setQty] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const RemoveHandler = (id) => {
    dispatch(Remove(id));
    gettotal();
  };

  const { id, title, price, heading, desciption, src } = Cart;
  return (
    <Card className={classes.root}>
      <span
        className={classes.remove}
        onClick={() => {
          console.log(id);
          RemoveHandler(id);
        }}
      >
        <ClearIcon color="secondary" />
      </span>
      <CardMedia
        className={classes.cover}
        image={src[0]}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
        <Typography component="h4" variant="h4" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {/* <Colors Colors={product.colors} /> */}
        </Typography>
        <Typography component="h5" gutterBottom color="secondary" variant="h5">
          $ <b>{price}</b>
        </Typography>
        <Typography component="h6" gutterBottom variant="h6">
          Quantity{" "}
          <TextField
            className={classes.qty}
            id="filled-number"
            type="number"
            defaultValue={1}
            value={Qty}
            onChange={(evt) => {
              if (evt.target.value !== "0") {
                setQty(evt.target.value);
                dispatch(ChangeQuantity(id, evt.target.value));
                gettotal();
              }
            }}
          />
        </Typography>
        <Typography className={classes.total} component="h6" variant="h6">
          Total <span>$ {" " + Qty * price}</span>
        </Typography>
        {/* <Typography variant="subtitle1" color="secondary">
          $ <b>{price}</b>
        </Typography> */}
      </CardContent>
    </Card>
  );
}

export default CartProducts;
