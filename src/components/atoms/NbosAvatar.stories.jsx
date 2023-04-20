import NbosAvatar from './NbosAvatar'

export default {
  title: 'atoms/NbosAvatar',
  component: NbosAvatar,
}

const Template = args => <NbosAvatar {...args} />

export const Primary = Template.bind({})
Primary.args = {}
