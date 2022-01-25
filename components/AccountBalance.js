import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function AccountBalance() {
  const [chartType, setChartType] = useState("Year");

  useEffect(() => {}, [chartType]);

  const data = {
    labels: ["Jan", "Apr", "Jul", "Oct"],
    datasets: [
      {
        data: [86, 114, 106, 106],
        label: "Total",
        borderColor: "#DEF5F2",
        backgroundColor: "#2DCA73",
        lineTension: 0.5,
        fill: false,
      },
      {
        data: [70, 90, 44, 60],
        label: "₦",
        borderColor: "#63BDAF",
        backgroundColor: "#71d1bd",
        lineTension: 0.5,
        fill: false,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    defaults: {
      color: "#44A798",
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "transparent",
        },
        ticks: {
          color: "#44A798",
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  const onChange = (e) => {
    const value = e.target.value;
    setChartType(value);
  };
  return (
    <div className="balance flex wrap">
      <div className="balance__amount grid align-center">
        <h6>Total Balance</h6>
        <p className="balance__amount__amount">₦89,153,001.73</p>
        <p className="balance__amount__booked">Book Balance: ₦450,000.093</p>
      </div>
      <div className="balance__chart">
        <div className="flex items-center balance__chart__container">
          <div className="flex-grow md:mr-3">
            <div className="balance__chart__buttons flex justify-between">
              <label
                className={
                  chartType === "Today" ? "balance__chart__buttons--active" : ""
                }
              >
                <input
                  type="radio"
                  name="chartButton"
                  value="Today"
                  onChange={onChange}
                />
                <span>Today</span>
              </label>
              <label
                className={
                  chartType === "Month" ? "balance__chart__buttons--active" : ""
                }
              >
                <input
                  type="radio"
                  name="chartButton"
                  value="Month"
                  onChange={onChange}
                />
                <span>Month</span>
              </label>
              <label
                className={
                  chartType === "Week" ? "balance__chart__buttons--active" : ""
                }
              >
                <input
                  type="radio"
                  name="chartButton"
                  value="Week"
                  onChange={onChange}
                />
                <span>Week</span>
              </label>
              <label
                className={
                  chartType === "Year" ? "balance__chart__buttons--active" : ""
                }
              >
                <input
                  type="radio"
                  name="chartButton"
                  value="Year"
                  onChange={onChange}
                />
                <span>Year</span>
              </label>
            </div>
            <div className="line-chart">
              <Line data={data} options={options} />
            </div>
          </div>
          <div className="balance__inflow flex wrap items-center">
            <div>
              <h5>Outflow</h5>
              <p>₦20,000</p>
            </div>
            <div>
              <h5>Outflow</h5>
              <p>₦20,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
