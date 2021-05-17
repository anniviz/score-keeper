import React from 'react'
import PlayerForm from './PlayerForm'

export default {
  title: 'PlayerForm',
  component: PlayerForm,
  argTypes: {},
}

//👇 We create a “template” of how args map to rendering
const Template = args => <PlayerForm {...args} />

export const DefaultForm = Template.bind({})

DefaultForm.args = {
  /*👇 The args you need here will depend on your component */
}
