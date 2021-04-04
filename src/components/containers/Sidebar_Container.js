import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData } from "../../store/action-creators/data";

import Sidebar from "../Sidebar/Sidebar";

const Sidebar_Container = ({ getData }) => {
  return <Sidebar getData={getData} />;
};
export default compose(connect(null, { getData }))(Sidebar_Container);
