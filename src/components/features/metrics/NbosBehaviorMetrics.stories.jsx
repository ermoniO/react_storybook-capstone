import { NbosBehaviorMetrics } from '../metrics/NbosBehaviorMetrics'

export default {
  title: 'Metrics/NbosBehaviorMetrics',
  component: NbosBehaviorMetrics,
}

const Template = args => <NbosBehaviorMetrics {...args} />

export const Default = Template.bind({})
Default.args = {}
