import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import StoreIcon from "@material-ui/icons/Store";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "50px",
    paddingTop: 30,
  },
  nav: {
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "left",
  },
  navLink: {
    flexGrow: 1,
    textAlign: "right",
    paddingRight: "10px ",
  },
  mr: {
    marginRight: "10px",
  },
  cart: {
    position: "absolute",
    top: 0,
    right: 20,
    backgroundColor: "#f50057",
    borderRadius: 50,
    fontSize: 16,
    padding: 2,
    zIndex: -1,
    width: 20,
    height: 20,
    color: "White",
  },
  Icons: {
    color: "White",
  },
}));

function Nav() {
  const classes = useStyles();
  const Cart = useSelector((state) => state.Cart);
  console.log(Cart.length);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="StoreIcon">
              <StoreIcon fontSize="large" className={classes.Icons} />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Nike Store
          </Typography>
          <Typography variant="body1" className={classes.navLink}>
            <Link to="/cart">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="ShoppingCartIcon"
              >
                {Cart.length !== 0 && (
                  <span className={classes.cart}>{Cart.length}</span>
                )}
                <ShoppingCartIcon fontSize="large" className={classes.Icons} />
              </IconButton>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
