import NbosLabel from './NbosLabel'

export default {
  title: 'atoms/NbosLabel',
  component: NbosLabel,
}

const Template = args => <NbosLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {}
