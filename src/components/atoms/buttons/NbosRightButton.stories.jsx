import NbosRightButton from './NbosRightButton'

export default {
  title: 'atoms/NbosRightButton',
  component: NbosRightButton,
}

const Template = args => <NbosRightButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
