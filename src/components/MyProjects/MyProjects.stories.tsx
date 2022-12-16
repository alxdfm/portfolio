import React from 'react';
import MyProjects, { Props } from './MyProjects';

export default {
  title: 'MyProjects',
  component: MyProjects,
  argTypes: {
    title: {
      name: 'Title',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'Meus projetos',
      description: 'It defines the title div.',
    },
    projects: {
      name: 'Projects',
      type: {
        name: 'object',
        required: true,
      },
      defaultValue: [
        {
          name: 'test',
          description: 'test',
          html_url: 'test',
          language: 'test',
        },
        {
          name: 'test2',
          description: 'test2',
          html_url: 'test2',
          language: 'test2',
        },
      ],
      description: 'It defines the MyProjects array',
    },
  },
};

export const Primary = (args: Props) => <MyProjects {...args} />;
