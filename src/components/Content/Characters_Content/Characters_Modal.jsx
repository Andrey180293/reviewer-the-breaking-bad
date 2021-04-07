import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import "./Characters_Content.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent ",
  },
}));
const Characters_Modal = ({ isOpenModal, setOpenModal, modalPage }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={classes.modal}
        open={isOpenModal}
        onClose={() => setOpenModal(!isOpenModal)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={isOpenModal}>
          <div
            onClick={() => setOpenModal(!isOpenModal)}
            style={{
              background: `url(${
                isOpenModal && modalPage.img
              }) 0 0/100% 95% no-repeat`,
            }}
            className="characterModalImg"
          ></div>
        </Fade>
      </Grid>
    </Grid>
  );
};
export default Characters_Modal;
