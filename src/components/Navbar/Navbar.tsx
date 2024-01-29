import React, { FC } from "react";

import "./styles.scss";

export interface ButtonProps {
  orgName: string;
  logo?: string;
}

const Navbar: FC<ButtonProps> = ({ orgName, logo }) => {
  return (
    <nav className={"navbar"}>
      <div className="navbar-left">
        {logo && <img />}
        <span className="navbar-name">{orgName}</span>
      </div>
      <div className="navbar-right"></div>
    </nav>
  );
};

export default Navbar;
