import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const NbosBarChart = () => {
  const options = {
    chart: {
      renderTo: 'container',
      type: 'bar',
    },
    title: {
      text: 'Basic Bar',
    },
    xAxis: {
      categories: [
        'Loan Production',
        'Deposit Growth',
        'TM Growth',
        'New Clients',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue',
      },
    },
    series: [
      {
        name: 'RM',
        data: [500, 1000, 2000, 0],
      },
      {
        name: 'This Time Last Year',
        data: [500, 800, 2000, 4],
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

export default NbosBarChart
