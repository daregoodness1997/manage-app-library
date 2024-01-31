import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Content } from "../components";

export interface Props {
  children?: React.ReactNode | React.ReactElement;
  useResponsiveOffset?: boolean;
}

export default {
  title: "Components/Content",
  component: Content,
} as Meta<typeof Content>;

const Template: StoryFn<Props> = (args) => <Content {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <h1>Hello World!</h1>,
};
