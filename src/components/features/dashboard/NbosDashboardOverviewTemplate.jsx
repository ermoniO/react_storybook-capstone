import { NbosSummary1 } from 'components/organisms/NbosSummary1'
import { NbosClient } from 'components/organisms/NbosClient'
import { NbosProfile } from 'components/organisms/NbosProfile'
import { NbosSummary2 } from 'components/organisms/NbosSummary2'
import Grid from '@mui/material/Grid'
import { client } from 'stories/data/testData-client'
import { summary1, summary2 } from 'stories/data/testData-summary'
import { user } from 'stories/data/testData-user'

export const NbosDashboardOverviewTemplate = () => {
  return (
    <Grid
      direction="row"
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}
      rows={{ xs: 4, sm: 3, md: 3, lg: 3, xl: 3 }}
      alignItems="stretch"
    >
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <NbosProfile userData={user} />
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={3} xl={3} sx={{ height: '100%' }}>
        <NbosClient pageData={client} />

        <NbosSummary1 pageData={summary1} />

        <NbosSummary2 pageData={summary2} />
      </Grid>
    </Grid>
  )
}

NbosDashboardOverviewTemplate.propTypes = {}

NbosDashboardOverviewTemplate.defaultProps = {}
