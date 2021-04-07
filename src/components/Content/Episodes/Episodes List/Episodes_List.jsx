import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Episodess_Content.scss";
import { Grid } from "@material-ui/core";
import Episodes_List_Characters_Card from "./Episodes_List_Characters_Card";
import Episodes_List_Card from "./Episodes_List_Card";

const Episodes_List = ({ listNumber, data, series }) => {
  const MapArr = data
    .filter((el) => el.season == listNumber && el.series == series)
    .sort((a, b) => a.episode - b.episode)
    .map((el) => el);

  return (
    <Grid container spacing={3} style={{ padding: "0  80px 0 0" }}>
      {MapArr.map((row, i) => {
        return (
          <Grid
            key={i + "w"}
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ backgroundColor: "white" }}
          >
            <Grid item xs={6}>
              <Episodes_List_Card row={row} />
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Episodes_List_Characters_Card charactersArr={row.characters} />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Episodes_List;
