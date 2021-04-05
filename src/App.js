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
  const [open, setOpen] = React.useState(true);
  // const [state, setState] = useState(null);

  /*useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/deaths")
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(state);
  */

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header setOpen={setOpen} open={open} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={!open ? 0 : 3}
          md={!open ? 0 : 3}
          lg={2}
          xl={2}
          className={!open && classes.hide}
        >
          <Sidebar_Container />
        </Grid>
        <Grid
          item
          xs={12}
          sm={!open ? 12 : 9}
          md={!open ? 12 : 9}
          lg={!open ? 12 : 10}
          xl={!open ? 12 : 10}
        >
          <Content_Container />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
