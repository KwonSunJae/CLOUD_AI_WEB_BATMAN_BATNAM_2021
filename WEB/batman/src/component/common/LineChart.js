import React from "react";
import { Line } from "react-chartjs-2";

const UserChart = () => {
  return (
    <>
      <Line
        data={{
          labels: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
          datasets: [
            {
              label: "My First Dataset",
              data: [12, 51, 12, 12511, 22, 1],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.5,
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default UserChart;
