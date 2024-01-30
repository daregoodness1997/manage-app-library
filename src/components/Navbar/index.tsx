import React, { FC } from "react";

export interface Props {
  orgName: string;
}

const Navbar: FC<Props> = ({ orgName }) => {
  return <div>{orgName}</div>;
};

export default Navbar;
