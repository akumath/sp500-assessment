import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderFilter = (props) => {
  const { handleSliderChange, sliderMinValue, sliderMaxValue } = props;
  const handleChange = (value) => {
    handleSliderChange(value);
  };
  return (
    <div>
      <p>Filter by year range</p>
      <Range
        min={sliderMinValue}
        max={sliderMaxValue}
        defaultValue={[sliderMinValue, sliderMaxValue]}
        tipFormatter={(value) => `${value}`}
        onChange={handleChange}
      />
    </div>
  );
};

SliderFilter.propTypes = {
  handleSliderChange: PropTypes.func.isRequired,
  sliderMinValue: PropTypes.number.isRequired,
  sliderMaxValue: PropTypes.number.isRequired,
};

export default SliderFilter;
