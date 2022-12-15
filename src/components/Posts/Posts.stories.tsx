import React from "react";
import Posts, { Props } from "./Posts";

export default {
  title: "Posts",
  component: Posts,
  argTypes: {
    title: {
      name: "Title",
      type: {
        name: "string",
        required: false,
      },
      defaultValue: "Meus posts",
      description: "It defines the title div.",
    },
    posts: {
      name: "Posts",
      type: {
        name: "object",
        required: true,
      },
      defaultValue: [
        {
          title: 'Lorem ipsum dolor sit amet.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui, fugiat commodi aliquid autem placeat.',
          createdAt: "2023-15-02T13:32:23",
        },
        {
          title: 'Lorem ipsum dolor sit amet.',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque qui, fugiat commodi aliquid autem placeat.',
          createdAt: "2023-15-02T13:32:23",
        },
      ],
      description: "It defines the posts array",
    },
  },
};

export const Primary = (args: Props) => <Posts {...args} />;
