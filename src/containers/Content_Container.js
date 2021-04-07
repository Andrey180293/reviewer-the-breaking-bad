import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getData, setCurrentPage } from "../../store/action-creators/data";
import Characters_Content from "../Content/Characters_Content/Characters_Content";
import { Route } from "react-router";
import Episodes_Content from "../Content/Episodes/Episodes_Content";
import Quotes_Content from "../Content/Quotes/Quotes_Content";
import Start_Page from "../Content/Start_Page";
import LinearProgress from "@material-ui/core/LinearProgress";
import Deathes_Content from "../Content/Deathes/Deathes_Content";

const Content_Container = ({
  data,
  isLoad,
  getData,
  currentPage,
  totalCount,
  perPage,
  setCurrentPage,
}) => {
  //------------------------| Episodes  Functions |-----------------------------------------------------------|

  const seasonsCount = (data, series) => {
    const seasonsArr =
      data && data.filter((f) => f.series === series).map((el) => +el.season);
    return new Set(seasonsArr);
  };
  //------------------------| Quotes  Functions |-------------------------------------------------------------|

  const quoteAutor = (data) => {
    return new Set(data && data.map((el) => el.author));
  };
  const quoteCount = (data, str) => {
    return data.filter((el) => el.author == str).length;
  };

  //------------------------| Deaths  Functions |-------------------------------------------------------------|

  const seasonsDeathsCount = (data) => {
    return new Set(data && data.map((el) => +el.season));
  };

  const deathsPeopleCount = (data, season) => {
    return data.filter((el) => el.season === season).length;
  };
  //----------------------------------------------------------------------------------------------------------|
  const pagesCount = Math.ceil(totalCount / perPage);
  useEffect(() => {
    getData(
      `characters?limit=${perPage}&offset=${currentPage * perPage - perPage}`
    );
  }, [currentPage]);

  if (isLoad === false) return <LinearProgress style={{ marginTop: "30vh" }} />;
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <Start_Page
            perPage={perPage}
            getData={getData}
            setCurrentPage={setCurrentPage}
          />
        )}
      />
      <Route
        path="/characters"
        render={() => (
          <Characters_Content
            data={data}
            pagesCount={pagesCount}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
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
      <Route
        path="/deaths"
        render={() => (
          <Deathes_Content
            data={data}
            seasonsDeathsCount={seasonsDeathsCount}
            deathsPeopleCount={deathsPeopleCount}
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
    currentPage: state.data.currentPage,
    perPage: state.data.perPage,
    totalCount: state.data.totalCount,
  };
};
export default compose(connect(mapStateToProps, { getData, setCurrentPage }))(
  Content_Container
);
