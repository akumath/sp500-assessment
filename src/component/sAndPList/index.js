import React from "react";
import PropTypes from "prop-types";
import SAndPItem from "./sAndPItem";

const SAndPList = (props) => {
  const { spHistoryData } = props;
  return (
    <div>
      <table>
        <caption>S&P 500 Total Returns by Year</caption>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Return</th>
            <th>Cumulative Return</th>
          </tr>
        </thead>
        {spHistoryData &&
          spHistoryData.map((data, index) => (
            <SAndPItem key={index} data={data} />
          ))}
      </table>
    </div>
  );
};

SAndPList.propTypes = {
  spHistoryData: PropTypes.array.isRequired,
};

export default SAndPList;
