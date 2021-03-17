import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { AddToCart } from "../redux/action";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    flexShrink: "0",
    flexWrap: "nowrap",
    alignSelf: "flex-start",
    margin: "20px 30px",
    width: "345px",
    paddingTop: 0,
  },
  media: {
    minHeight: 200,
    margin: 0,
    objectFit: "cover",
  },
  addCArt: {
    backgroundColor: "black",
    color: "white",
  },
});

function Product(props) {
  const classes = useStyles();
  const { title, price, heading, id, src } = props.products;

  const dispatch = useDispatch();

  const CartHandler = (id) => {
    console.log(id);
    dispatch(AddToCart(id));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/products/${id}`}>
        <CardMedia
          className={classes.media}
          image={src[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="secondary" component="p">
            $ <b>{price}</b>
          </Typography>
          <Typography variant="body2" component="h3">
            {heading}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          fullWidth={true}
          className={classes.addCArt}
          onClick={() => {
            CartHandler(id);
          }}
        >
          Add to cart
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
