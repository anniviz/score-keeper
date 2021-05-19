import React from 'react'
import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultMalePlayer = Template.bind({})
DefaultMalePlayer.args = {
  name: 'John Doe',
  score: 20,
}

export const DefaultFemalePlayer = Template.bind({})
DefaultFemalePlayer.args = {
  name: 'Jane Doe',
  score: 30,
}
