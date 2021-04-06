import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  setLoad,
  getData,
  getImg,
  getQuote,
} from "../../store/action-creators/data";

import App from "../../App";

const App_Container = ({ setLoad, getData, getImg, getQuote }) => {
  useEffect(() => {
    getImg();
    getQuote();
  }, []);

  return <App setLoad={setLoad} />;
};

export default compose(connect(null, { setLoad, getData, getImg, getQuote }))(
  App_Container
);
