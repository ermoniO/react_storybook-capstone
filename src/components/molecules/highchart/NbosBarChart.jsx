// //Utilities file
// import PropTypes from 'prop-types'
// import React from 'react'
// // Load Highcharts
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// import { convertNum } from 'services/convertNum'
// import { BehaviorMetricsTable } from 'stories/data/behaviorMetricsTable'
// import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

// const options = {
//   chart: {
//     type: 'bar',
//     style: {
//       fontFamily: '',
//     },
//   },
//   legend: {
//     align: 'left',
//   },
//   title: {
//     text: 'NA',
//     align: 'left',
//   },
//   xAxis: {
//     categories: [],
//     tickLength: 500,
//     endOnTick: false,
//   },
//   yAxis: {
//     labels: {
//       enabled: false,
//     },
//     visible: false,
//     tickLength: 0,
//     minorGridLineWidth: 0,
//   },
//   tooltip: {
//     formatter: function () {
//       return convertNum(this.y)
//     },
//   },

//   plotOptions: {
//     bar: {
//       dataLabels: {
//         enabled: true,
//         formatter: function () {
//           return convertNum(this.y)
//         },
//       },
//       borderRadius: 10,
//       borderWidth: 10,
//     },
//   },
//   series: [
//     {
//       name: 'NA',
//       data: [],
//       lineWidth: 5,
//       minPointLength: 100,
//       color: '#1B6AF8',
//       zoneAxis: 'y',
//       zones: [
//         {
//           value: 3,
//           color: 'red',
//         },
//         {
//           color: '#1B6AF8',
//         },
//       ],
//     },
//     {
//       name: 'NA',
//       data: [],
//       lineWidth: 5,
//       minPointLength: 100,
//       color: 'lightgrey',
//     },
//   ],
//   dataLabels: {
//     color: '#FFFFFF',
//   },
// }

// export const NbosBarChart = ({
//   data,
//   clientId,
//   bgColor,
//   datasetOneLabel,
//   datasetTwoLabel,
// }) => {
//   let datasetOne = []
//   let datasetTwo = []
//   let rowData = []
//   let categories = []
//   //Pass data as a prop, have a parent component
//   //Conditionally pass rowdata as a prop and conditionally find out in the parent component
//   if (data == 'BehaviorMetricsTable') {
//     rowData = BehaviorMetricsTable
//     categories = [
//       'Avg. Overall RM Satisfaction',
//       'Client Calls',
//       'Prospect Calls',
//       'Strategies Updated',
//     ]
//     if (rowData[clientId].prospect_calls_y1 <= 2) {
//       console.log('red')
//       options.series[0].colors = [bgColor, bgColor, 'red', bgColor]
//     }
//   } else if (data == 'outcomeMetricsTable') {
//     rowData = outcomeMetricsTable
//     categories = [
//       'Loan Production',
//       'Deposit Growth',
//       'TM Growth',
//       'New Clients',
//     ]
//     // if (rowData[clientId].new_clients_y1 <= 2) {
//     //   options.series[0].colors = [bgColor, bgColor, bgColor, 'red']
//     // } else {
//     //   options.series[0].colors = [bgColor, bgColor, bgColor, bgColor]
//     // }
//   } else {
//     rowData = [{ NotProvided: 10, NotProvided: 10 }]
//     categories = ['Not Provided', 'Not Provided']
//   }

//   for (const item in rowData[clientId]) {
//     if (item.slice(-2) == 'y1') {
//       let chartData1 = rowData[clientId][item]
//       datasetOne.push(chartData1)
//     } else if (item.slice(-2) == 'y2') {
//       let chartData2 = rowData[clientId][item]
//       datasetTwo.push(chartData2)
//     } else if (item == 'user_id') {
//     } else {
//       datasetOne.push(rowData[clientId][item])
//       datasetTwo.push(rowData[clientId][item])
//     }
//   }

//   //options.title.text = `${users[clientId].tl_first_name} ${users[clientId].tl_last_name} VS This Time Last Year`
//   options.title.text = ''
//   options.xAxis.categories = categories
//   // options.series[0].color = bgColor
//   options.series[0].name = datasetOneLabel
//   options.series[0].data = datasetOne
//   options.series[1].name = datasetTwoLabel
//   options.series[1].data = datasetTwo

//   return (
//     <div>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   )
// }

// NbosBarChart.propTypes = {
//   data: PropTypes.oneOf(['BehaviorMetricsTable', 'outcomeMetricsTable', '']),
//   clientId: PropTypes.number,
//   bgColor: PropTypes.string,
//   datasetOneLabel: PropTypes.string,
//   datasetTwoLabel: PropTypes.string,
// }

// NbosBarChart.defaultProps = {
//   data: '',
//   clientId: 0,
//   bgColor: 'black',
//   datasetOneLabel: 'Not Provided',
//   datasetTwoLabel: 'Not Provided',
// }

// import PropTypes from 'prop-types'
// import React, { useEffect, useState } from 'react'
// // Load Highcharts
// import Highcharts, { chart } from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// import { users } from 'stories/data/testData-users'
// import { convertNum } from 'services/convertNum'
// import { BehaviorMetricsTable as behaviorMetricsTable } from 'stories/data/behaviorMetricsTable'
// import { outcomeMetricsTable } from 'stories/data/outcomeMetricsTable'

// export const NbosBarChart = ({
//   data,
//   categories,
//   clientId,
//   bgColor,
//   datasetOneLabel,
//   datasetTwoLabel,
// }) => {
//   const datasetOne = []
//   const datasetTwo = []

//   for (const item in data[clientId]) {
//     if (item.slice(-2) === 'y1') {
//       const chartData1 = data[clientId][item]

//       datasetOne.push(chartData1)
//     } else if (item.slice(-2) === 'y2') {
//       const chartData2 = data[clientId][item]

//       datasetTwo.push(chartData2)
//     } else if (item === 'user_id') {
//       continue
//     } else {
//       datasetOne.push(data[clientId][item])
//       datasetTwo.push(data[clientId][item])
//     }
//   }

//   const [options, setOptions] = useState({
//     chart: {
//       type: 'bar',
//       style: {
//         fontFamily: '',
//       },
//     },
//     legend: {
//       align: 'left',
//     },
//     title: {
//       text: '',
//       align: 'left',
//     },
//     xAxis: {
//       categories: categories,
//       tickLength: 500,
//       endOnTick: false,
//     },
//     yAxis: {
//       labels: {
//         enabled: false,
//       },
//       visible: false,
//       tickLength: 0,
//       minorGridLineWidth: 0,
//     },
//     tooltip: {
//       formatter: function () {
//         return convertNum(this.y)
//       },
//     },

//     plotOptions: {
//       bar: {
//         dataLabels: {
//           enabled: true,
//           formatter: function () {
//             return convertNum(this.y)
//           },
//         },
//         borderRadius: 10,
//         borderWidth: 10,
//       },
//     },
//     series: [
//       {
//         name: datasetOneLabel,
//         data: datasetOne,
//         lineWidth: 5,
//         minPointLength: 100,
//         color: '#1B6AF8',
//         zoneAxis: 'y',
//         zones: [
//           {
//             value: 3,
//             color: 'red',
//           },
//           {
//             color: '#1B6AF8',
//           },
//         ],
//       },
//       {
//         name: datasetTwoLabel,
//         data: datasetTwo,
//         lineWidth: 5,
//         minPointLength: 100,
//         color: 'lightgrey',
//       },
//     ],
//     dataLabels: {
//       color: '#FFFFFF',
//     },
//   })

//   const updateSeries = () => {
//     setOptions({
//       chart: {
//         type: 'bar',
//         style: {
//           fontFamily: '',
//         },
//       },
//       legend: {
//         align: 'left',
//       },
//       title: {
//         text: '',
//         align: 'left',
//       },
//       xAxis: {
//         categories: categories,
//         tickLength: 500,
//         endOnTick: false,
//       },
//       yAxis: {
//         labels: {
//           enabled: false,
//         },
//         visible: false,
//         tickLength: 0,
//         minorGridLineWidth: 0,
//       },
//       tooltip: {
//         formatter: function () {
//           return convertNum(this.y)
//         },
//       },

//       plotOptions: {
//         bar: {
//           dataLabels: {
//             enabled: true,
//             formatter: function () {
//               return convertNum(this.y)
//             },
//           },
//           borderRadius: 10,
//           borderWidth: 10,
//         },
//       },
//       series: [
//         {
//           name: datasetOneLabel,
//           data: datasetOne,
//           lineWidth: 5,
//           minPointLength: 100,
//           color: '#1B6AF8',
//           zoneAxis: 'y',
//           zones: [
//             {
//               value: 3,
//               color: 'red',
//             },
//             {
//               color: '#1B6AF8',
//             },
//           ],
//         },
//         {
//           name: datasetTwoLabel,
//           data: datasetTwo,
//           lineWidth: 5,
//           minPointLength: 100,
//           color: 'lightgrey',
//         },
//       ],
//       dataLabels: {
//         color: '#FFFFFF',
//       },
//     })
//   }

//   useEffect(() => {
//     updateSeries()
//   }, [data])

//   return (
//     <div>
//       <HighchartsReact
//         data-testid="barchart"
//         highcharts={Highcharts}
//         options={options}
//       />
//     </div>
//   )
// }

// NbosBarchart.propTypes = {
//   data: PropTypes.array || PropTypes.string,
//   categories: PropTypes.array,
//   clientId: PropTypes.number,
//   bgColor: PropTypes.string,
//   datasetOneLabel: PropTypes.string,
//   datasetTwoLabel: PropTypes.string,
// }

// NbosBarchart.defaultProps = {
//   data: [
//     { notprovided: 10, notprovided2: 10 },
//     { notprovided: 10, notprovided2: 10 },
//   ],
//   categories: ['Not Provided', 'Not Provided'],
//   clientId: 0,
//   bgColor: 'black',
//   datasetOneLabel: 'Not Provided',
//   datasetTwoLabel: 'Not Provided',
// }
