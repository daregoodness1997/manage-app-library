import React, { FC, memo, useState } from "react";
import {
  Header as CarbonHeader,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
} from "@carbon/react";
import { Fade } from "@carbon/icons-react";

export interface Props {
  orgName: string;
  className?: string;
}

const Header: FC<Props> = ({ orgName, className }) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const onClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };
  return (
    <CarbonHeader aria-label="Dashboard Platform Name" className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
        aria-expanded={isSideNavExpanded}
      />
      <HeaderName href="#" prefix="Template" className={"header-name"}>
        [{orgName}]
      </HeaderName>
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
          <SideNavLink renderIcon={Fade}>Link</SideNavLink>
          <SideNavLink renderIcon={Fade}>Link</SideNavLink>
        </SideNavItems>
      </SideNav>{" "}
    </CarbonHeader>
  );
};

export default memo(Header);
