
import Profile from ".";
import { Props } from "./Profile";

export default {
  title: 'Profile',
  component: Profile,
  argTypes: {
    url: {
      name: 'URL for image profile',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'https://www.github.com/alxdfm.png',
      description: 'It defines the URL that will come the profile image.',
    },
    name: {
      name: 'Name for person profile',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'Alexandre Fraga Machado',
      description: 'It defines the name that will come the profile name.',
    },
    description: {
      name: 'Description for person profile',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: 'Full Stack Developer',
      description: 'It defines the name that will come the profile name.',
    },
  }
}

export const Primary = (args: Props) => (
  <Profile {...args}/>
)