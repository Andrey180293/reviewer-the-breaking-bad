import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const Quotes_List = ({ data, quotesAuthorList }) => {
  return (
    <Grid container spacing={3}>
      {data
        .filter((f) => f.author == quotesAuthorList)
        .map((el) => {
          return (
            <Grid item xs={12} key={el.quote + "quote" + 2}>
              <Paper>{el.quote}</Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};
export default Quotes_List;
