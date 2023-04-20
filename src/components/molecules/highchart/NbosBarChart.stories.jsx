import { NbosBarChart } from './NbosBarChart'

export default {
  title: 'molecules/NbosBarChart',
  component: NbosBarChart,
}

const Template = args => <NbosBarChart {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const BehaviorMetricsTable = Template.bind({})
BehaviorMetricsTable.args = {
  data: 'BehaviorMetricsTable',
  clientId: 1,
  bgColor: '#1B6AF8',
  datasetOneLabel: 'RM',
  datasetTwoLabel: 'This Time Last Year',
}

export const OutcomeMetricsTable = Template.bind({})
OutcomeMetricsTable.args = {
  data: 'outcomeMetricsTable',
  clientId: 1,
  bgColor: '#1B6AF8',
  datasetOneLabel: 'RM',
  datasetTwoLabel: 'This Time Last Year',
}
