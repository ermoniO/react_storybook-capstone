import NbosTable from './NbosTable'

export default {
  title: 'molecules/NbosTable',
  component: 'NbosTable',
}

const Template = args => <NbosTable {...args} />

export const Primary = Template.bind({})
Primary.args = {}
