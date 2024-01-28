import React, { FC } from "react";
import "./Button.scss";
import { Button as CButton } from "@carbon/react";

export interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <CButton>{label}</CButton>;
};

export default Button;
