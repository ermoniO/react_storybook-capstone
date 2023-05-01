import { NbosOutcomeMetrics } from '../metrics/NbosOutcomeMetrics'

export default {
  title: 'Metrics/NbosOutcomeMetrics',
  component: NbosOutcomeMetrics,
}

const Template = args => <NbosOutcomeMetrics {...args} />

export const Default = Template.bind({})
Default.args = {}
