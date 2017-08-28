import React, { Component } from "react";
import { ResponsiveRadar } from "nivo";

import { Container } from "rebass";

const data = [
  {
    month: "January",
    2015: 12,
    2014: 4
  },
  {
    month: "February",
    2015: 3,
    2014: 6
  },
  {
    month: "March",
    2015: 12,
    2014: 17
  },
  {
    month: "April",
    2015: 2,
    2014: 9
  },
  {
    month: "May",
    2015: 8,
    2014: 2
  },
  {
    month: "June",
    2015: 4,
    2014: 9
  },
  {
    month: "July",
    2015: 2,
    2014: 7
  },
  {
    month: "August",
    2015: 4,
    2014: 7
  },
  {
    month: "September",
    2015: 6,
    2014: 5
  },
  {
    month: "October",
    2015: 3,
    2014: 8
  },
  {
    month: "December",
    2015: 7,
    2014: 5
  }
];
class VybzRadar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const years = ["2015", "2014"];
    return (
      <ResponsiveRadar
        data={data}
        keys={years}
        height={800}
        curve="catmullRomClosed"
        enableDots={false}
        indexBy="month"
        margin={{
          top: 70,
          right: 80,
          bottom: 40,
          left: 80
        }}
        isInteractive={true}
      />
    );
  }
}

export default VybzRadar;
