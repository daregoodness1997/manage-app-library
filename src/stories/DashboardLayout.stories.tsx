import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DashboardLayout } from "../layouts";

export interface Props {
  orgName: string;
  handleAppChange?: (e?: any) => void;
}

export default {
  title: "Layouts/Dashboard",
  component: DashboardLayout,
  argTypes: {},
} as Meta<typeof DashboardLayout>;

const Template: StoryFn<Props> = (args) => <DashboardLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orgName: "Octocare",
};
