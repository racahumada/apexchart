import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ChartWrapper } from '../../styles/Charts/style';

export default function Charts() {
  const [options, setOptions] = useState({
    chart: {
      id: 'basic-bar',
      legend: { show: false },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: 'series-2',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <ChartWrapper>
      <Chart options={options} series={series} type="bar" width="500" />
      <Chart options={options} series={series} type="bar" width="500" />
      <Chart options={options} series={series} type="bar" width="500" />
    </ChartWrapper>
  );
}
