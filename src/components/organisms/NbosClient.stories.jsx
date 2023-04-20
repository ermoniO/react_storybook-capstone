import { NbosClient } from './NbosClient'
import { client } from '../../stories/data/testData-client'

export default {
  title: 'Organism/NbosClient',
  component: NbosClient,
}

const Template = args => <NbosClient {...args} />

export const Client = Template.bind({})
Client.args = {
  pageData: client,
}
