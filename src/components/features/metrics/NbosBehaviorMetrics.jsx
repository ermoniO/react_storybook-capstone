import React, { useState } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const NbosBehaviorMetrics = () => {
  const [view, setView] = useState('behavior') // default view is Outcome Metrics
  const [data, setData] = useState({
    rmSatisfaction: [3, 6.0], // this year's and last year's RM satisfaction data
    clientCalls: [10, 8], // this year's and last year's client calls data
    prospectCalls: [3, 4], // this year's and last year's prospect calls data
    strategiesUpdated: [20, 18], // this year's and last year's strategies updated data
  })

  // handle switching between views
  const handleViewChange = e => {
    setView(e.target.value)
  }
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: null,
      align: 'left',
    },
    xAxis: {
      categories: [
        'Avg Overall RM Satisfaction',
        'Client Calls',
        'Prospect Calls',
        'Strategies Updated',
      ],
      title: {
        text: null,
      },
      gridLineWidth: 0,
    },
    yAxis: {
      labels: {
        enabled: false,
        overflow: 'justify',
      },
      gridLineWidth: 0,
    },
    tooltip: {
      valueSuffix: 'millions',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
      borderRadius: 10,
      borderWidth: 5,
    },
    legend: {
      align: 'left',
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: 'RM',
        data: [
          data.rmSatisfaction[0],
          data.clientCalls[0],
          data.prospectCalls[0],
          data.strategiesUpdated[0],
        ],
        lineWidth: 5,
        minPointLength: 100,
        color: 'blue',
        zoneAxis: 'y',
        zones: [
          {
            value: 3,
            color: 'red',
          },
          {
            color: 'blue',
          },
        ],
      },
      {
        name: 'This Time Last Year',
        data: [
          data.rmSatisfaction[1],
          data.clientCalls[1],
          data.prospectCalls[1],
          data.strategiesUpdated[1],
        ],
        lineWidth: 5,
        minPointLength: 100,
        color: 'grey',
      },
    ],
    dataLabels: {
      color: '#FFFFFF',
    },
  }

  // Adding this makes the RM legend color turn red not the prospect calls
  // if (data.prospectCalls[0] < 5) {
  //   options.series[0].color = 'red'
  // }
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
