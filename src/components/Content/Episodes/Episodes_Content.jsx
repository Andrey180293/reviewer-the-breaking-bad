import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Episodes_Card from "./Episodes_Card";
import Episodes_List from "./Episodes_List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Episodes_Content = ({ data, seasonsCount }) => {
  const classes = useStyles();
  console.log(seasonsCount(data));
  const [openList, setOpenList] = useState(false);
  const [listNumber, setListNumber] = useState(null);
  const [series, setSeries] = useState(null);

  const setTable = (n, str) => {
    setOpenList(true);
    setListNumber(n);
    setSeries(str);
  };
  return (
    <div className={classes.root}>
      {!openList ? (
        <Grid container spacing={3}>
          <Grid container spacing={3} item xs={6} className={classes.papper}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              Breaking Bad
            </Grid>
            {[...seasonsCount(data, "Breaking Bad")].map((el) => {
              return (
                <Grid item xs={4} onClick={() => setTable(el, "Breaking Bad")}>
                  <Episodes_Card el={el} />
                </Grid>
              );
            })}
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              Better Call Saul
            </Grid>

            {[...seasonsCount(data, "Better Call Saul")].map((el) => {
              return (
                <Grid
                  item
                  xs={4}
                  onClick={() => setTable(el, "Better Call Saul")}
                >
                  <Episodes_Card el={el} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      ) : (
        <Episodes_List
          data={data}
          listNumber={listNumber}
          seasonsCount={seasonsCount}
          data={data}
          series={series}
        />
      )}
    </div>
  );
};
export default Episodes_Content;
