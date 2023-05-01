import { NbosChartControls } from './NbosChartControls'

export default {
  title: 'Metrics/NbosChartControls',
  component: NbosChartControls,
}

const Template = args => <NbosChartControls {...args} />

export const Default = Template.bind({})
Default.args = {}
