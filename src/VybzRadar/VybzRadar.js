import React, { Component } from "react";
import { ResponsiveRadar } from "nivo";

import { Container } from "rebass";

const data = [
  {
    month: "January",
    2017: 7,
    2016: 6,
    2015: 7,
    2014: 5,
    2013: 8
  },
  {
    month: "February",
    2017: 7,
    2016: 2,
    2015: 6,
    2014: 5,
    2013: 8
  },
  {
    month: "March",
    2017: 7,
    2016: 3,
    2015: 7,
    2014: 5,
    2013: 7
  },
  {
    month: "April",
    2017: 3,
    2016: 5,
    2015: 4,
    2014: 5,
    2013: 6
  },
  {
    month: "May",
    2017: 6,
    2016: 5,
    2015: 3,
    2014: 5,
    2013: 7
  },
  {
    month: "June",
    2017: 3,
    2016: 6,
    2015: 6,
    2014: 5,
    2013: 7
  },
  {
    month: "July",
    2017: 6,
    2016: 6,
    2015: 6,
    2014: 5,
    2013: 2
  },
  {
    month: "August",
    2017: 0,
    2016: 5,
    2015: 4,
    2014: 5,
    2013: 6
  },
  {
    month: "September",
    2017: 0,
    2016: 6,
    2015: 3,
    2014: 5,
    2013: 4
  },
  {
    month: "October",
    2017: 0,
    2016: 6,
    2015: 6,
    2014: 5,
    2013: 1
  },
  {
    month: "November",
    2017: 0,
    2016: 6,
    2015: 5,
    2014: 5,
    2013: 4
  },
  {
    month: "December",
    2017: 0,
    2016: 2,
    2015: 3,
    2014: 4,
    2013: 6
  }
];
class VybzRadar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const years = ["2017", "2016", "2015", "2014", "2013"];
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
