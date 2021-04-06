import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { setLoad, getData } from "../../store/action-creators/data";

import App from "../../App";

const App_Container = ({ setLoad, getData }) => {
  return <App setLoad={setLoad} getData={getData} />;
};

export default compose(connect(null, { setLoad, getData }))(App_Container);
