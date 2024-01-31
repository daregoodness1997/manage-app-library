import React, { FC, memo } from "react";

import { Content, Header, SideNavbar } from "../../components";

export interface Props {
  orgName: string;
  handleAppChange?: (e?: any) => void;
  children?: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ orgName, handleAppChange, children }) => {
  return (
    <div>
      <Header orgName={orgName} handleAppChange={handleAppChange} />
      <SideNavbar />
      <Content children={children} />
    </div>
  );
};

export default memo(DashboardLayout);
