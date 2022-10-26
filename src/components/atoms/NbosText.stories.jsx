import { NbosText } from './NbosText'

export default {
  title: 'Atoms/NbosText',
  component: NbosText,
}

const Template = args => <NbosText {...args} />

export const Primary = Template.bind({})
Primary.args = {}
