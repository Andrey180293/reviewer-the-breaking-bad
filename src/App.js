import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header/Header";
import Sidebar_Container from "./containers/Sidebar_Container";
import Content_Container from "./containers/Content_Container";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  hide: {
    display: "none",
  },
}));
const App = () => {
  const classes = useStyles();
  const [isOpenBurger, setOpenBurger] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header setOpenBurger={setOpenBurger} isOpenBurger={isOpenBurger} />
        </Grid>
        <Grid item className={!isOpenBurger && classes.hide}>
          <Sidebar_Container />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "20px  ",
            marginTop: isOpenBurger && "-24px",
          }}
        >
          <Content_Container />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
