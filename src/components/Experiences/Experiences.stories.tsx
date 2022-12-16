import React from 'react';
import Experiences from '.';
import { Props } from './Experiences';

export default {
  title: 'Experiences',
  component: Experiences,
  argTypes: {
    title: {
      name: 'Title',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'Experiências',
      description: 'It defines the title',
    },
    experiences: {
      name: 'Experiences',
      type: {
        name: 'object',
        required: true,
      },
      defaultValue: [
        {
          company: 'AEL Sistemas',
          start: 2019,
          end: 2022,
          role: 'Técnico em Eletrônica',
        },
        {
          company: 'Descomplica',
          start: 2022,
          end: 'Atualmente',
          role: 'Desenvolvedor Fullstack',
        },
      ],
      description: 'It defines the array for experiences.',
    },
  },
};

export const Primary = (args: Props) => <Experiences {...args} />;
