import React from 'react';
import Links from '.';
import { Link } from './Links';

export default {
  title: 'Links',
  component: Links,
  argTypes: {
    linksData: {
      name: 'Objects array to links list',
      type: {
        name: 'array',
        required: true,
      },
      description:
        'It defines the objects array that will appear. [...,{image: "<ReactNode /",description: "string" url: "string"}]',
    },
  },
};

export const Primary = (args: Array<Link>) => <Links {...args} />;
