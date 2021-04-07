import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Characters_Card = ({ item }) => {
  const classes = useStyles2();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Name:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.name}
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              Nickname:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.nickname}
              </span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Birthday:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.birthday}
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              Portrayed:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.portrayed}
              </span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Status:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.status}
              </span>
            </TableCell>
            <TableCell component="th" scope="row">
              Category:
              <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                {item.category}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            {item.occupation && item.occupation.length > 0 && (
              <TableCell component="th" scope="row">
                <h3>Occupation:</h3>
              </TableCell>
            )}
            {item.occupation &&
              item.occupation.map((el) => {
                return (
                  <TableRow key={el + "table"}>
                    <TableCell component="th" scope="row">
                      {el}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Characters_Card;
