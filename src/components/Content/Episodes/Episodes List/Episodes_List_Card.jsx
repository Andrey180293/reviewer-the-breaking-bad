import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "100%",
    backgroundColor: "#e57373",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
    borderTop: "1px solid grey",
  },
  titleName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
});

const Episodes_List_Card = ({ row }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          episode {row.episode}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          date {row.air_date}
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {" "}
          title
          <Typography
            className={classes.titleName}
            color="textSecondary"
            gutterBottom
          >
            {row.title}
          </Typography>
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {" "}
          Series
          <Typography
            className={classes.titleName}
            color="textSecondary"
            gutterBottom
          >
            {row.series}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Episodes_List_Card;
