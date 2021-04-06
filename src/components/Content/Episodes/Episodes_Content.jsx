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
    <div>
      {!openList ? (
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={6} style={{ textAlign: "center" }}>
            Breaking Bad
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center" }}>
            Better Call Saul
          </Grid>

          <Grid container spacing={3} item xs={6} style={{ height: "100%" }}>
            {[...seasonsCount(data, "Breaking Bad")].map((el) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  onClick={() => setTable(el, "Breaking Bad")}
                >
                  <Episodes_Card el={el} color="#f44336" />
                </Grid>
              );
            })}
          </Grid>

          <Grid container item xs={6} spacing={3} style={{ height: "100%" }}>
            {[...seasonsCount(data, "Better Call Saul")].map((el) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  onClick={() => setTable(el, "Better Call Saul")}
                >
                  <Episodes_Card el={el} color="#4caf50" />
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
