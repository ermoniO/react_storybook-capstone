import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
const NbosColumn = () => {
  const options = {
    chart: {
      renderTo: 'container',
      type: 'column',
    },
    title: {
      text: 'Basic Columm',
    },
    xAxis: {
      categories: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4', 'Booked YTD'],
    },
    yAxis: {
      title: {
        text: 'Revenue',
      },
    },
    series: [
      {
        name: '2020',
        data: [500, 1000, 2000, 500, 600],
      },
      {
        name: '2021',
        data: [500, 800, 2000, 600, 700],
      },
    ],

    plotOptions: {
      column: {
        pointPadding: 0.001,
        borderWidth: 0,
      },
    },
  }

  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  )
}

export default NbosColumn
