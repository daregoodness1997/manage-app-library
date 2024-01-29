import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Navbar } from "../components";

export interface NavbarProps {
  orgName: string;
}

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Navbar>;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orgName: "Octosoft",
};
