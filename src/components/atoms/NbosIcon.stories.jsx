import { NbosIcon } from './NbosIcon'

export default {
  title: 'Atoms/NbosIcon',
  component: NbosIcon,
}

const Template = args => <NbosIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icon: 'thumb_up',
  color: '#009933',
}

export const Error = Template.bind({})
Error.args = {
  icon: 'error',
  color: '#ff0000',
}

export const Total = Template.bind({})
Total.args = {
  icon: 'auto_awesome_motion',
  color: '#9900cc',
}

export const Warning = Template.bind({})
Warning.args = {
  icon: 'warning',
  color: '#e6b800',
}

export const Warning96 = Template.bind({})
Warning96.args = {
  icon: 'warning',
  color: '#e6b800',
  fontSize: 96,
}
