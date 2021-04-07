import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { NavLink } from "react-router-dom";
import Deathes_List from "./Deathes_List";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#4caf50",
  },
  decoration: { textDecoration: "none" },
}));

const Deathes_Content = ({ data, seasonsDeathsCount, deathsPeopleCount }) => {
  const classes = useStyles();
  const [openList, setOpenList] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState(null);

  const setDeathesList = (item) => {
    setSeasonNumber(item);
    setOpenList(true);
  };

  return (
    <>
      {!openList ? (
        <Grid container spacing={3}>
          {[...seasonsDeathsCount(data)].sort().map((el, i) => {
            return (
              <Grid item xs={3} key={el + "deaths"}>
                <NavLink
                  to={`/deaths/season/${el}`}
                  className={classes.decoration}
                >
                  <Paper
                    className={classes.paper}
                    onClick={() => {
                      setDeathesList(el);
                    }}
                  >
                    <Badge
                      badgeContent={deathsPeopleCount(data, el)}
                      color="primary"
                      overlap="rectangle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div style={{ margin: "5px" }}>season {el}</div>
                    </Badge>
                  </Paper>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Deathes_List data={data} seasonNumber={seasonNumber} />
      )}
    </>
  );
};
export default Deathes_Content;
