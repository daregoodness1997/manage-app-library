import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Header } from "../components";

export interface Props {
  orgName: string;
}

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
} as Meta<typeof Header>;

const Template: StoryFn<Props> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orgName: "Octosoft",
};
