import React, { useState } from "react";
import "./Paginator.css";

const Paginator = ({
  counts,
  setCurrentPage,
  color = "#2196f3",
  activePage,
}) => {
  const contsArr = (counts, activePage) => {
    const middleCount = 2;
    const res = [];
    for (let i = 1; i <= counts; i++) {
      res.push(i);
    }

    const res2 = res.slice(
      activePage > middleCount
        ? activePage - (middleCount + 1)
        : activePage - activePage,
      activePage + middleCount
    );
    //--------------------------------------------------------------------------

    const startNumbers = res.slice(0, middleCount);
    //--------------------------------------------------------------------------
    const endNumbers = res.slice(-middleCount, res.length);
    //--------------------------------------------------------------------------

    // Умова при якій появляються останні цифри
    const ifEndlength =
      activePage < res.length - (middleCount + middleCount - 1)
        ? endNumbers
        : activePage < res.length - middleCount
        ? endNumbers.slice(1, endNumbers.length)
        : [];

    //--------------------------------------------------------------------------

    return res.length <= 10
      ? res
      : activePage > middleCount + middleCount
      ? startNumbers.concat(res2, ifEndlength)
      : activePage > middleCount + middleCount - 1
      ? startNumbers.slice(0, startNumbers.length - 1).concat(res2, ifEndlength)
      : res2.concat(ifEndlength);
  };

  const setPage = (num) => {
    setCurrentPage(num);
  };
  return (
    <div className="paginator">
      <div
        className="triangle left"
        onClick={() => setPage(activePage > 1 ? activePage - 1 : 1)}
        style={{
          borderTop: `5px solid ${
            activePage == 1 ? "rgb(190, 190, 190)" : color
          }`,
          borderRight: `5px solid ${
            activePage == 1 ? "rgb(190, 190, 190)" : color
          }`,
        }}
      />
      {contsArr(counts, activePage).map((count) => {
        return (
          <div
            key={count}
            className="paginator-number"
            onClick={() => setPage(count)}
            style={{
              backgroundColor: activePage === count && color,
              color: activePage === count && "white",
            }}
          >
            {count}
          </div>
        );
      })}
      <div
        disabled={true}
        onClick={() => setPage(activePage < counts ? activePage + 1 : counts)}
        className="triangle right"
        style={{
          borderTop: `5px solid ${
            activePage == counts ? "rgb(190, 190, 190)" : color
          }`,
          borderRight: `5px solid ${
            activePage == counts ? "rgb(190, 190, 190)" : color
          }`,
        }}
      />
    </div>
  );
};

export default Paginator;
