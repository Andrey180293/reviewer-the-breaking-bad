import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: "#4caf50",
  },
});

const Deathes_List = ({ data, seasonNumber }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.head} justifyContent="flex-end">
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell align="left">Death</TableCell>
            <TableCell align="left">Responsible</TableCell>
            <TableCell align="left">Last words</TableCell>
            <TableCell align="left">Cause</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((f) => f.season == seasonNumber)
            .sort((a, b) => a.episode - b.episode)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {row.episode}
                </TableCell>
                <TableCell align="left">{row.death}</TableCell>
                <TableCell align="left">{row.responsible}</TableCell>
                <TableCell align="left">{row.last_words}</TableCell>
                <TableCell align="left">{row.cause}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Deathes_List;
