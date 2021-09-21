import React from "react";
import { Line } from "react-chartjs-2";

const UserChart = () => {
  return (
    <Line
      data={{
        labels: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }}
      options={{ maintainAspectRatio: false }}
    />
  );
};

export default UserChart;
