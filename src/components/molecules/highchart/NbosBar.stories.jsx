import NbosBar from './NbosBar'

export default {
  title: 'molecules/NbosBar',
  component: 'NbosBar',
}

const Template = args => <NbosBar {...args} />

export const Primary = Template.bind({})
Primary.args = {}

// export const OpportunitiesTable = Template.bind({})
// OpportunitiesTable.args = {
//   data: opportunitiesDetailsTable,
//   rowHeight: 80,
//   isShortened: true,
// }
