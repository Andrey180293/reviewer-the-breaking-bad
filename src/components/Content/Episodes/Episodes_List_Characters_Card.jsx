import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#81c784",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Episodes_List_Characters_Card = ({ charactersArr }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h5">
          Characters
        </Typography>
        {charactersArr.map((charactersItem) => {
          return (
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {charactersItem}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};
export default Episodes_List_Characters_Card;
