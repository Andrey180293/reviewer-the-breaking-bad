import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),

    textAlign: "center",
    color: "white",
    height: "10vh",
    backgroundColor: theme.palette.primary.main,
    fontSize: "1.5em",
    lineHeight: "9vh",
  },
  decoration: {
    textDecoration: "none",
  },
}));

const Start_Page = ({ getData }) => {
  const classes = useStyles();
  const menu = [
    { name: "Characters", link: "characters" },
    { name: "Episodes", link: "episodes" },
    { name: "Quotes", link: "quotes" },
    { name: "Death", link: "deaths" },
  ];
  return (
    <div>
      <Grid
        container
        spacing={5}
        style={{
          cursor: "pointer",
          padding: "0 50px",
        }}
      >
        {menu.map((el) => {
          return (
            <Grid item xs={6} primary key={el.name}>
              <NavLink to={`/${el.link}`} className={classes.decoration}>
                <Paper
                  className={classes.paper}
                  onClick={() => getData(el.link)}
                >
                  {el.name}
                </Paper>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Start_Page;
