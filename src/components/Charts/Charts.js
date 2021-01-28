import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ChartWrapper } from '../../styles/Charts/style';
import moment from 'moment';

const sec = ['21.23', '01.23', '10.23', '15.03', '21.50'];

const form = (value) => {
  return moment.utc(value).format('HH:mm');
};

export default function Charts() {
  const [options, setOptions] = useState({
    chart: {
      id: 'basic-bar',
      legend: { show: false },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          const oi = value.toString().split('.');
          console.log(oi);
          const teste = parseInt(oi[0]) + ':' + '00';
          console.log(teste);
          return teste;
        },
      },
    },
    xaxis: {
      categories: [1991, 1992],
      datetimeFormatter: {
        hour: 'HH:mm',
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: sec,
    },

    // {
    //   name: 'series-2',
    //   data: [30, 40, 45, 50, 49, 60, 70, 91],
    // },
  ]);

  return (
    <ChartWrapper>
      <Chart options={options} series={series} type="bar" width="500" />
      <Chart options={options} series={series} type="bar" width="500" />
      <Chart options={options} series={series} type="bar" width="500" />
    </ChartWrapper>
  );
}
