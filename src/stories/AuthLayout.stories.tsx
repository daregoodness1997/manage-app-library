import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AuthLayout } from "../layouts";

export interface Props {
  children?: React.ReactNode | React.ReactElement;
  title?: string;
  subTitle?: string;
}

export default {
  title: "Layouts/Auth",
  component: AuthLayout,
  argTypes: {},
} as Meta<typeof AuthLayout>;

const Template: StoryFn<Props> = (args) => <AuthLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
