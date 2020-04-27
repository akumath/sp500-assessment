import React from "react";
import PropTypes from "prop-types";

const SAndPItem = (props) => {
  const { year, totalReturn, cumulativeReturn } = props.data;
  return (
    <tbody>
      <tr>
        <td>{year}</td>
        <td>{totalReturn}</td>
        <td>{cumulativeReturn.toFixed(2)}</td>
      </tr>
    </tbody>
  );
};

SAndPItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SAndPItem;
