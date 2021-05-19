import React from 'react'
import HistoryPlayerScore from './HistoryPlayerScore'

export default {
  title: 'HistoryPlayerScore',
  component: HistoryPlayerScore,
}

const Template = args => <HistoryPlayerScore {...args} />

export const DefaultHistoryPlayerScore = Template.bind({})
DefaultHistoryPlayerScore.args = {
  name: 'John Doe',
  score: 20,
}
