import GridTest from './GridTest'

export default {
  title: 'atoms/GridTest',
  component: GridTest,
}

const Template = args => <GridTest {...args} />

export const Primary = Template.bind({})
Primary.args = {}
