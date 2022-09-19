import React from "react";
import Experiences from ".";
import { Props } from "./Experiences"

export default {
  title: 'Experiences',
  component: Experiences,
  argTypes: {
    
  }
}

export const Primary = (args: Props) => (
  <Experiences {...args}/>
)
