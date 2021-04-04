import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData } from "../../store/action-creators/data";

import App from "../../App";

const App_Container = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);
  return <App />;
};
export default compose(connect(null, { getData }))(App_Container);
