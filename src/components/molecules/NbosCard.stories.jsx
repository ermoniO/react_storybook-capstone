import { NbosCard } from './NbosCard'

export default {
  title: 'Molecules/NbosCard',
  component: NbosCard,
}

const Template = args => <NbosCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}
