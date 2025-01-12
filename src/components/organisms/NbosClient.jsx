import PropTypes from 'prop-types'
import { NbosPage } from '../molecules/NbosPage'
import Grid from '@mui/material/Grid'

export const NbosClient = ({ pageData }) => {
  const results = []

  Object.keys(pageData).forEach(key => {
    results.push(
      <Grid key={key} item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title={key}
          count={pageData[key]}
        />
      </Grid>,
    )
  })
  return (
    <Grid
      item
      zeroMinWidth
      container
      justifyContent="flex-end"
      alignItems="center"
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}
      style={{
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        margin: '1rem',
        width: '95%',
      }}
    >
      {/* {results} */}
      <Grid gridRow="span 2" item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title="TOTAL RELATIONSHIPS"
          count="48"
          // count={pageData['total.relationships']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title="Credit Only Relationships"
          count="6"
          // count={pageData['credit.only.relationships']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title="Relationships with <$25k TTM Revenue"
          count="35"
          // count={pageData['relationships.low.revenue']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title="Top Prospects"
          count="5"
          // count={pageData['top.prospects']}
        />
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosPage
          className="dbCard"
          bgColor="white"
          title="Suspects"
          count="2"
          // count={pageData['suspects']}
        />
      </Grid>
    </Grid>
  )
}

NbosClient.propTypes = {
  pageData: PropTypes.object,
}

NbosClient.defaultProps = {
  pageData: {},
}
