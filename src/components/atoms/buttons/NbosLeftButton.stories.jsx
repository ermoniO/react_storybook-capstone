import NbosLeftButton from './NbosLeftButton'

export default {
  title: 'atoms/NbosLeftButton',
  component: NbosLeftButton,
}

const Template = args => <NbosLeftButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
