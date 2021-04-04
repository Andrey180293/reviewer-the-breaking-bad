import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent ",
  },
}));
const Characters_Modal = ({ item, isOpenModal, setOpenModal, modalImage }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.modal}
      open={isOpenModal}
      onClose={() => setOpenModal(!isOpenModal)}
      closeAfterTransition
      style={
        {
          // position: "absolute",
        }
      }
    >
      <Fade
        in={isOpenModal}
        style={{
          border: "none",
          WebkitFontSmoothing: "none",
          background: "none",
        }}
      >
        <div
          onClick={() => setOpenModal(!isOpenModal)}
          style={{
            backgroundColor: "transparent ",

            border: "none",
            width: "80%",
            height: "80vh",
            background: `url(${
              isOpenModal && modalImage
            }) 0 0/80% 95% no-repeat`,
          }}
        ></div>
      </Fade>
    </div>
  );
};
export default Characters_Modal;
