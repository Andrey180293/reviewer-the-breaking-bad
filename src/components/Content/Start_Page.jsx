import React from "react";
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
    height: "25vh",
    backgroundColor: theme.palette.primary.main,
    fontSize: "1.5em",
    lineHeight: "25vh",
  },
  decoration: {
    textDecoration: "none",
  },
}));

const Start_Page = ({ getData, perPage, setCurrentPage }) => {
  const classes = useStyles();
  const menu = [
    { name: "Characters", link: "characters" },
    { name: "Episodes", link: "episodes" },
    { name: "Quotes", link: "quotes" },
    { name: "Death", link: "deaths" },
  ];
  return (
    <Grid
      container
      spacing={5}
      style={{
        cursor: "pointer",
        padding: "0 50px",
      }}
    >
      {menu.map((el, i) => {
        return (
          <Grid item xs={12} sm={6} key={el.link + "link"}>
            <NavLink to={`/${el.link}`} className={classes.decoration}>
              <Paper
                className={classes.paper}
                onClick={() => {
                  setCurrentPage(1);
                  getData(`${el.link}?limit=${perPage}&offset=0`);
                }}
              >
                {el.name}
              </Paper>
            </NavLink>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Start_Page;
