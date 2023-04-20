import NbosPage from './NbosPage'

export default {
  title: 'molecules/NbosPage',
  component: NbosPage,
}

const Template = args => <NbosPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const TotalRelationships = Template.bind({})

TotalRelationships.args = {
  label: 'Credit only Relationshios',
  count: '6',
}

export const CreditOnly = Template.bind({})
CreditOnly.args = {
  key: 4,
  title: 'Credit Only Relationships',
  count: 6,
}
