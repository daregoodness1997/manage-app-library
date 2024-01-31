import React, { FC, memo } from "react";
import { Fade } from "@carbon/icons-react";
import { SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem } from "@carbon/react";
import { Link } from "react-router-dom";

export interface Props {
  items?: [];
  isSideNavExpanded?: boolean;
  onClickSideNavExpand?: (e?: any) => void;
}

const SideNavbar: FC<Props> = ({ items, isSideNavExpanded, onClickSideNavExpand }) => {
  return (
    <SideNav
      aria-label="Side navigation"
      expanded={isSideNavExpanded}
      onSideNavBlur={onClickSideNavExpand}
      href="#main-content"
      placeholder={"Side navigation"}
    >
      <SideNavItems>
        <SideNavMenu renderIcon={Fade} title="Category title">
          <SideNavMenuItem>Link</SideNavMenuItem>
          <SideNavMenuItem>Link</SideNavMenuItem>
          <SideNavMenuItem>Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade} title="Category title" isActive={true}>
          <SideNavMenuItem>Link</SideNavMenuItem>
          <SideNavMenuItem aria-current="page">Link</SideNavMenuItem>
          <SideNavMenuItem>Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu renderIcon={Fade} title="Category title">
          <SideNavMenuItem>Link</SideNavMenuItem>
          <SideNavMenuItem>Link</SideNavMenuItem>
          <SideNavMenuItem>Link</SideNavMenuItem>
        </SideNavMenu>
        <SideNavLink renderIcon={Fade}>
          {/* <a href="/profile">Profile</a> */}
          <Link to="/profile" style={{ textDecoration: "none", color: "#606060" }}>
            Profile
          </Link>
        </SideNavLink>
        <SideNavLink renderIcon={Fade}>Link</SideNavLink>
      </SideNavItems>
    </SideNav>
  );
};

export default memo(SideNavbar);
