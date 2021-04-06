import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import clsx from "clsx";
import Sidebar_Container from "./components/containers/Sidebar_Container";
import Content_Container from "./components/containers/Content_Container";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px",
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
const App = ({ setLoad, getData }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header setOpen={setOpen} open={open} setLoad={setLoad} />
        </Grid>
        <Grid item className={!open && classes.hide}>
          <Sidebar_Container />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "20px  ",
            marginTop: open && "-24px",
          }}
        >
          <Content_Container />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
