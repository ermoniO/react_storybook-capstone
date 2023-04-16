import NbosColumn from './NbosColumn'

export default {
  title: 'molecules/NbosColumn',
  component: 'NbosColumn',
}

const Template = args => <NbosColumn {...args} />

export const Primary = Template.bind({})
Primary.args = {}
