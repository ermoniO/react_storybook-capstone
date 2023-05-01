import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Chart Title',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
}
const NbosBar = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default NbosBar
