import NbosSummaryDashboard from './NbosSummaryDashboard'

export default {
  title: 'organism/NbosSummaryDashboard',
  component: NbosSummaryDashboard,
}

const Template = args => <NbosSummaryDashboard {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const TotalRelationships = Template.bind({})

TotalRelationships.args = {
  label: 'Credit only Relationshios',
  count: '6',
}
