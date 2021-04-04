import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Characters_Card from "./Characters_Card";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Characters_Modal from "./Characters_Modal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Characters_Content = ({ data }) => {
  const classes = useStyles();

  const [isOpenModal, setOpenModal] = React.useState(false);
  const [modalImage, setModalImage] = React.useState(null);

  const handleModalChange = (item) => {
    setOpenModal(true);
    setModalImage(item.img);
  };
  return (
    <div className={classes.root}>
      {!isOpenModal ? (
        <>
          {" "}
          {data &&
            data.map((item) => {
              return (
                <Grid container spacing={3}>
                  <Grid
                    onClick={() => handleModalChange(item)}
                    item
                    xs={3}
                    style={{
                      background: `url(${item.img}) 0 0/80% 95% no-repeat`,
                      cursor: "pointer",
                    }}
                  ></Grid>
                  <Grid item xs={9}>
                    <Characters_Card item={item} />
                  </Grid>
                </Grid>
              );
            })}
        </>
      ) : (
        <Characters_Modal
          isOpenModal={isOpenModal}
          setOpenModal={setOpenModal}
          modalImage={modalImage}
        />
      )}
    </div>
  );
};
export default Characters_Content;
