import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const Deathes_List = ({ data, seasonNumber }) => {
  return (
    <Grid container spacing={3}>
      {data
        .filter((f) => f.season == seasonNumber)
        .map((el) => {
          return (
            <Grid item xs={12}>
              <Paper>{el.death}</Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};
export default Deathes_List;
