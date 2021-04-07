import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkDekore: {
    color: "white",
    textDecorationLine: "none",
  },
}));

const Header = ({ isOpenBurger, setOpenBurger }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!isOpenBurger ? (
            <IconButton
              onClick={() => setOpenBurger(!isOpenBurger)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.menuButton}
              edge="start"
              onClick={() => setOpenBurger(!isOpenBurger)}
            >
              {" "}
              <CloseIcon />
            </IconButton>
          )}

          <Typography variant="h5" className={classes.title}>
            <NavLink className={classes.linkDekore} to="/">
              Film viewer
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
