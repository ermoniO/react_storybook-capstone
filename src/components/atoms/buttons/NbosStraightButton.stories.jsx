import NbosStraightButton from './NbosStraightButton'

export default {
  title: 'atoms/NbosStraightButton',
  component: NbosStraightButton,
}

const Template = args => <NbosStraightButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
