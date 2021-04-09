import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData, setCurrentPage } from "../store/action-creators/data";

import Sidebar from "../components/Sidebar/Sidebar";

const Sidebar_Container = ({ getData, setCurrentPage, perPage }) => {
  const sidebarHandleChange = (el) => {
    setCurrentPage(1);
    getData(`${el.link}?limit=${perPage}&offset=0`);
  };

  return <Sidebar sidebarHandleChange={sidebarHandleChange} />;
};

const mapStateToProps = (state) => {
  return {
    perPage: state.data.perPage,
  };
};

export default compose(connect(mapStateToProps, { getData, setCurrentPage }))(
  Sidebar_Container
);
