import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginator({ pagesCount, setCurrentPage, currentPage }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        page={currentPage}
        count={pagesCount}
        onChange={(e) => setCurrentPage(e.target.innerText)}
        color="primary"
      />
    </div>
  );
}
