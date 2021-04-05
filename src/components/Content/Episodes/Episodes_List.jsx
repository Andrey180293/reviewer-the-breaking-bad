import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Episodess_Content.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Episodes_List = ({ listNumber, data, series }) => {
  const [charactersState, setCharactersState] = useState(null);

  const charactersArr = (arr) => {
    const res = [];
    while (arr.length > 0) res.push(arr.splice(0, 3));
    setCharactersState(res);
    return res;
  };
  useEffect(() => {}, [charactersState]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Episode</StyledTableCell>
            <StyledTableCell>Air Date</StyledTableCell>
            <StyledTableCell align="left">Series</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <div align="left" className="charactersLarge charactersLargehead">
              Characters
            </div>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((el) => el.season == listNumber && el.series == series)
            .sort((a, b) => a.episode - b.episode)
            .map((row) => {
              return (
                <>
                  <StyledTableRow key={row.episode_id}>
                    <StyledTableCell align="left" className="fontResponsible">
                      {row.episode}
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fontResponsible">
                      {row.air_date}
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fontResponsible">
                      {row.series}
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fontResponsible">
                      {row.title}
                    </StyledTableCell>
                    <div align="left" className="charactersLarge">
                      {row.characters.map((charactersItem) => {
                        return (
                          <TableRow key={charactersItem} align="left">
                            {charactersItem}
                          </TableRow>
                        );
                      })}
                    </div>
                  </StyledTableRow>
                </>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Episodes_List;
/*
<div className="charactersSmall">
                  {" "}
                  <StyledTableRow> Characters</StyledTableRow>
                  {charactersArr(row.characters, 3).map((arr) => {
                    {
                      console.log(arr);
                    }
                    return (
                      <StyledTableRow align="left">
                        {arr.map((item) => {
                          return (
                            <StyledTableCell align="left">
                              {item}
                              {console.log(item)}
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
                </div>
*/
