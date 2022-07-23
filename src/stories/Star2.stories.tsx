import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import Star from '../components/Star';
// import Star from '../components/Star2';

export default {
  title: 'SVGs/Star2',
  component: Star,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

// export const LoggedOut = Template.bind({});

// export const LoggedIn = Template.bind({});
