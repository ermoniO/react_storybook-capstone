// import Grid from '@mui/material/Grid'
// import PropTypes from 'prop-types'
// import { NbosSelector } from 'components/molecules/NbosSelector'
// import { NbosText } from 'components/atoms/NbosText'
// import { users } from 'stories/data/testData-users'
// import NbosMetrics from 'components/organisms/NbosMetrics'
// import { NbosBarChart } from 'components/molecules/highchart/NbosBarChart'
// import { BehaviorMetricsTable } from 'stories/data/behaviorMetricsTable'

// export const NbosMetricsTemplate = ({ clientId }) => {
//   return (
//     <Grid
//       direction="row"
//       container
//       spacing={{ xs: 3, md: 4 }}
//       columns={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
//       rows={{ xs: 3, sm: 2, md: 2, lg: 2, xl: 2 }}
//     >
//       <Grid
//         item
//         xs={1}
//         sm={1}
//         md={1}
//         lg={1}
//         xl={1}
//         style={{ paddingTop: '3rem', paddingLeft: '3rem' }}
//       >
//         <NbosText
//           size="xl"
//           text={`${users[clientId].tl_first_name} ${users[clientId].tl_last_name} VS This Time Last Year`}
//         />
//       </Grid>

//       <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
//         <NbosSelector
//           bgColor="#1B6AF8"
//           labels={['Outcome Metrics', 'Behavior Metrics']}
//           onChange={alignment => {
//             console.log(alignment)
//           }}
//         />
//       </Grid>
//       {/* Use effect that watches for the variable (button component) once it changes it triggers inside the BarChart. The variable get change from the button level */}
//       {/* <NbosBarChart
//         data="outcomeMetricsTable"
//         clientId={1}
//         bgColor="#1B6AF8"
//         datasetOneLabel="RM"
//         datasetTwoLabel="This Time Last Year"
//       /> */}
//     </Grid>
//   )
// }

// NbosMetricsTemplate.propTypes = {
//   clientId: PropTypes.number,
// }

// NbosMetricsTemplate.defaultProps = {
//   clientId: 0,
// }
