import NbosHeading from './NbosHeading'

export default {
  title: 'atoms/NbosHeading',
  component: NbosHeading,
}

const Template = args => <NbosHeading {...args} />

export const Primary = Template.bind({})
Primary.args = {}
