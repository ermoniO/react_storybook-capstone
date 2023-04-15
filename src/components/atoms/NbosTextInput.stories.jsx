import NbosTextInput from './NbosTextInput'

export default {
  title: 'atoms/NbosTextInput',
  component: NbosTextInput,
}

const Template = args => <NbosTextInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
  textInput: 'Hello',
}
