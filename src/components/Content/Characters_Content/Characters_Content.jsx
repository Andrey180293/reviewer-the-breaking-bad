import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Characters_Card from "./Characters_Card";
import Grid from "@material-ui/core/Grid";
import Characters_Modal from "./Characters_Modal";
import { NavLink } from "react-router-dom";
import "./Characters_Content.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Characters_Content = ({ data }) => {
  const classes = useStyles();

  const [isOpenModal, setOpenModal] = React.useState(false);
  const [modalPage, setModalPage] = React.useState(null);

  const handleModalChange = (item) => {
    setOpenModal(true);
    setModalPage(item);
    return item;
  };

  return (
    <div>
      {!isOpenModal ? (
        <>
          {data &&
            data.map((item) => {
              return (
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={4}
                    onClick={() => handleModalChange(item)}
                  >
                    <NavLink
                      to={`/characters/${item.char_id}`}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        style={{
                          background: `url(${item.img}) 0 0/100% 95% no-repeat`,
                          cursor: "pointer",
                        }}
                        className="characterImg"
                      ></div>
                    </NavLink>
                  </Grid>

                  <Grid item xs={12} sm={7} md={8}>
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
          modalPage={modalPage}
        />
      )}
    </div>
  );
};
export default Characters_Content;