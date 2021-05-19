import React from 'react'
import NavButton from './NavButton'

export default {
  title: 'NavButton',
  component: NavButton,
}

const Template = args => <NavButton {...args} />

export const DefaultNavButton = Template.bind({})
DefaultNavButton.args = {
  children: 'Play',
  isActive: false,
}

export const ActiveNavButton = Template.bind({})
ActiveNavButton.args = {
  children: 'History',
  isActive: true,
}
