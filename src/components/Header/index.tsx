import React, { FC, memo } from "react";
import {
  Header as CarbonHeader,
  Dropdown,
  HeaderMenuButton,
  HeaderName,
  Select,
  SelectItem,
  SkipToContent,
} from "@carbon/react";

export interface Props {
  orgName: string;
  className?: string;
  isSideNavExpanded?: boolean;
  onClickSideNavExpand?: (e?: any) => void;
  handleAppChange?: (e?: any) => void;
}

const Header: FC<Props> = ({
  orgName,
  className,
  isSideNavExpanded,
  onClickSideNavExpand,
  handleAppChange,
}) => {
  return (
    <CarbonHeader aria-label="Dashboard Platform Name" className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
        aria-expanded={isSideNavExpanded}
      />
      <HeaderName
        href="#"
        prefix="Template"
        className={"header-name"}
        style={{ background: "#00539a", color: "#fff" }}
      >
        [{orgName}]
      </HeaderName>

      <Select
        id="modules"
        inline
        labelText="Modules"
        defaultValue={"CRM"}
        placeholder={"Select a module"}
        onChange={handleAppChange}
      >
        <SelectItem value="CRM" text="CRM" />
        <SelectItem value="Admin" text="Admin" />
        <SelectItem value="EMR" text="EMR" />
        <SelectItem value="Employee" text="Employee" />
      </Select>
    </CarbonHeader>
  );
};

export default memo(Header);
