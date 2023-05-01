import { NbosMetrics } from '../metrics/NbosMetrics'

export default {
  title: 'Metrics/NbosMetrics',
  component: NbosMetrics,
}

const Template = args => <NbosMetrics {...args} />

export const Default = Template.bind({})
Default.args = {}
