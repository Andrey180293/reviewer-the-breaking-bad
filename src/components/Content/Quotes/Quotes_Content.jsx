import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import Quotes_List from "./Quotes_List";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
  decoration: { textDecoration: "none" },
}));

const Quotes_Content = ({ data, quoteAutor, quoteCount }) => {
  const classes = useStyles();
  const [openList, setOpenList] = useState(false);
  const [quotesAuthorList, setQuotesAuthorList] = useState(null);

  const setQuotesList = (item) => {
    setQuotesAuthorList(item);
    setOpenList(true);
  };

  return (
    <>
      {!openList ? (
        <Grid container spacing={3}>
          {[...quoteAutor(data)].map((el) => {
            return (
              <Grid item xs={3} key={"quotes" + el}>
                <NavLink to={`/quotes/${el}`} className={classes.decoration}>
                  <Paper
                    style={{ backgroundColor: "#4caf50" }}
                    className={classes.paper}
                    onClick={() => {
                      setQuotesList(el);
                    }}
                  >
                    <Badge
                      badgeContent={quoteCount(data, el)}
                      color="primary"
                      overlap="rectangle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div style={{ margin: "5px" }}>{el}</div>
                    </Badge>
                  </Paper>
                </NavLink>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Quotes_List data={data} quotesAuthorList={quotesAuthorList} />
      )}
    </>
  );
};
export default Quotes_Content;
