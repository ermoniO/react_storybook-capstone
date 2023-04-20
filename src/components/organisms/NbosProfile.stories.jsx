import { NbosProfile } from './NbosProfile'
import { user } from 'stories/data/testData-user'

export default {
  title: 'Organism/NbosProfile',
  component: NbosProfile,
}

const Template = args => <NbosProfile {...args} />

export const Primary = Template.bind({})
Primary.args = {}
