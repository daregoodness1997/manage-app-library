import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { SideNavbar } from "../components";

export interface Props {
  items?: [];
  isSideNavExpanded?: boolean;
  onClickSideNavExpand?: (e?: any) => void;
}

export default {
  title: "Components/SideNavbar",
  component: SideNavbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof SideNavbar>;

const Template: StoryFn<Props> = (args) => <SideNavbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [],
};
