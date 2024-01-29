import React, { FC } from "react";

import "./styles.scss";

export interface ButtonProps {
  label: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";

  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className={"button"}>{label}</button>;
};

export default Button;
