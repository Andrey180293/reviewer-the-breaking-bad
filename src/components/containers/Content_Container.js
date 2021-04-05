import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData } from "../../store/action-creators/data";

import Characters_Content from "../Content/Characters_Content/Characters_Content";
import { Route } from "react-router";
import Episodes_Content from "../Content/Episodes/Episodes_Content";
import Quotes_Content from "../Content/Quotes/Quotes_Content";

const Content_Container = ({ data, isLoad }) => {
  const seasonsCount = (data, series) => {
    const seasonsArr =
      data && data.filter((f) => f.series != series).map((el) => +el.season);
    return new Set(seasonsArr);
  };

  const quoteAutor = (data) => {
    const res = data.map((el) => el.author);
    return new Set(res);
  };
  const quoteCount = (data, str) => {
    const res = data.map((el) => el.author);
    return res.filter((el) => el == str).length;
  };
  if (isLoad === false) return ".......";
  return (
    <>
      <Route
        path="/characters"
        render={() => <Characters_Content data={data} />}
      />
      <Route
        path="/episodes"
        render={() => (
          <Episodes_Content data={data} seasonsCount={seasonsCount} />
        )}
      />
      <Route
        path="/quotes"
        render={() => (
          <Quotes_Content
            data={data}
            quoteAutor={quoteAutor}
            quoteCount={quoteCount}
          />
        )}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    isLoad: state.data.isLoad,
  };
};
export default compose(connect(mapStateToProps, { getData }))(
  Content_Container
);
