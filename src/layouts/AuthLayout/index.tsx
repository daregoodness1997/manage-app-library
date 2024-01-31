import React, { FC, memo } from "react";

import "./styles.scss";

export interface Props {
  children?: React.ReactNode | React.ReactElement;
  title?: string;
  subTitle?: string;
}

const AuthLayout: FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div className="auth-wrapper">
      <aside className="auth-aside"></aside>
      <div className="auth-container">
        <div className="auth-heading">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default memo(AuthLayout);
