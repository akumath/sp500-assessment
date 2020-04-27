import React, { useState, useEffect } from "react";
import "./App.css";
import SAndPList from "./component/sAndPList";
import { spHistory } from "./service";
import SliderFilter from "./component/slider";

function App() {
  // hold all data
  const [spHistoryData, setSpHistoryData] = useState([]);
  // hold filtered data
  const [filteredData, setFilteredData] = useState([]);
  // slider min and max value
  const [sliderMinValue, setSliderMinValue] = useState(null);
  const [sliderMaxValue, setSliderMaxValue] = useState(null);

  const calCumulativeReturn = (data) => {
    return data.reduce((acc, val) => {
      acc += parseFloat(val.totalReturn);
      return (val.cumulativeReturn = acc);
    }, 0);
  };

  const fetchSPHistory = () => {
    // service call
    const data = spHistory();
    // year column ascending sorted
    const sortedData = data.sort((a, b) => a.year - b.year);
    calCumulativeReturn(sortedData);
    setSliderMinValue(sortedData[0].year);
    setSliderMaxValue(sortedData[data.length - 1].year);
    // original data
    setSpHistoryData(sortedData);
    // set filtered data equal to original data initially
    setFilteredData(sortedData);
  };

  // fetch the records from the API
  useEffect(() => {
    fetchSPHistory();
  }, []);

  const handleSliderChange = (val) => {
    // filter data based on selected year
    const data = spHistoryData.filter((d) => {
      return d.year >= val[0] && d.year <= val[1];
    });
    calCumulativeReturn(data);
    setFilteredData(data);
  };

  return (
    <div className="container">
      <h3>S&P 500 Total Returns</h3>
      <p className="mb-lg">
        The total returns of the S&P 500 index are listed by year. Total returns
        include two components: the return generated by dividends and the return
        generated by price changes in the index. While most individuals focus
        only on the price returns of the index, dividends play an important
        factor in overall investment returns.
      </p>
      <SliderFilter
        handleSliderChange={handleSliderChange}
        sliderMinValue={sliderMinValue}
        sliderMaxValue={sliderMaxValue}
      />
      <SAndPList spHistoryData={filteredData} />
    </div>
  );
}

export default App;
