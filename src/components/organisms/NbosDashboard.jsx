import { NbosBehaviorMetrics } from 'components/features/metrics/NbosBehaviorMetrics'
import { NbosSummary1 } from './NbosSummary1'
import { NbosSummary2 } from './NbosSummary2'
import { NbosMetrics } from 'components/features/metrics/NbosMetrics'
import { DashboardPage } from 'components/pages/dashboard'
import { NbosDashboardOverviewTemplate } from 'components/features/dashboard/NbosDashboardOverviewTemplate'
import { NbosOpportunitiesSummaryTemplate } from 'components/features/dashboard/NbosOpportunitiesSummaryTemplate'
import { NbosOpportunitiesTableTemplate } from 'components/features/dashboard/NbosOpportunitiesTableTemplate'

export const NbosDashboard = () => {
  return (
    <>
      <NbosDashboardOverviewTemplate />
      <NbosMetrics />
      <NbosOpportunitiesSummaryTemplate />
      <NbosOpportunitiesTableTemplate />
    </>
  )
}

NbosDashboard.propTypes = {}

NbosDashboard.defaultProps = {}
