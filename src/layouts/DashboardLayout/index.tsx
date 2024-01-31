import React, { FC, memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Content, Header, SideNavbar } from "../../components";

export interface Props {
  orgName: string;
  handleAppChange?: (e?: any) => void;
  children?: React.ReactNode;
}

const DashboardLayout: FC<Props> = ({ orgName, handleAppChange, children }) => {
  return (
    <div>
      <Router>
        <Header orgName={orgName} handleAppChange={handleAppChange} />
        <SideNavbar />
        <Content children={children} />
      </Router>
    </div>
  );
};

export default memo(DashboardLayout);
