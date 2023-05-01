import NbosButton from './NbosButton'

export default {
  title: 'Molecules/NbosButton',
  component: NbosButton,
}

const Template = args => <NbosButton {...args} />

export const OutcomeSelected = Template.bind({})
OutcomeSelected.args = {
  selectedChart: 'outcome',
  handleClick: () => {
    console.log('click')
  },
}

export const BehaviorSelected = Template.bind({})
BehaviorSelected.args = {
  selectedChart: 'behavior',
  handleClick: () => {
    console.log('click')
  },
}
