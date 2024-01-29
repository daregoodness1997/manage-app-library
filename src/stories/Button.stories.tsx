import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../components";

export interface ButtonProps {
  label: string;
}

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
