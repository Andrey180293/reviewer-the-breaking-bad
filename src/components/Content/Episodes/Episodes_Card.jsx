import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

const Episodes_Card = ({ el, color }) => {
  const classes = useStyles();
  return (
    <Card style={{ backgroundColor: color }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Season {el}
        </Typography>
      </CardContent>
      <NavLink to={`/episodes/seasons/${el}`}>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </NavLink>
    </Card>
  );
};
export default Episodes_Card;
