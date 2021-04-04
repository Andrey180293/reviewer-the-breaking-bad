import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData } from "../../store/action-creators/data";

import Sidebar from "../Sidebar/Sidebar";
import Characters_Content from "../Content/Characters_Content";

const Content_Container = ({ data }) => {
  return <Characters_Content data={data} />;
};
const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
};
export default compose(connect(mapStateToProps, { getData }))(
  Content_Container
);
