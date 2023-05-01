import { NbosChartTitle } from './NbosChartTitle'

export default {
  title: 'Metrics/NbosChartTitle',
  component: NbosChartTitle,
}

const Template = args => <NbosChartTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  headerText: 'Patrick Barnes vs This Time Last Year',
}
