import React, { FC, memo } from "react";
import { Button as CarbonButton } from "@carbon/react";

import "./styles.scss";

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";

  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <CarbonButton className={"CarbonButton"} onClick={onClick}>
      {label}
    </CarbonButton>
  );
};

export default memo(Button);
