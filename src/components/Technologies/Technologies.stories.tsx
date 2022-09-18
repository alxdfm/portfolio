import React from "react";
import Technologies from ".";
import { Props } from "./Technologies";

export default {
  title: 'Technologies',
  component: Technologies,
  argTypes: {
    title: {
      name: 'Title',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: 'Tecnologias',
      description: 'It defines the title div.',
    },
    techTags: {
      name: 'Technologies tags',
      type: {
        name: 'object',
        required: true,
      },
      defaultValue: ['Javascript', 'Typescript', 'Java', 'ReactJS', 'NodeJS', 'Git', 'HTML', 'CSS', 'Styled-components'],
      description: 'It defines the technologies array.',
    },
  }
}

export const Primary = (args: Props) => (
  <Technologies {...args}/>
)
