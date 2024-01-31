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
      <aside className="auth-aside">
        <div>
          <h1>Octocare</h1>

          <h2>Transforming Healthcare Experiences</h2>
          <p>
            Our healthcare solution places patients at the forefront, offering
            personalized and patient-centric care experiences. From appointment
            scheduling to treatment plans, every aspect is tailored to meet
            individual needs
          </p>
        </div>
        <div className="auth-aside-illus"></div>
      </aside>
      <div className="auth-container">
        <div className="auth-formbox">
          <div className="auth-header">
            <h3 className="auth-title">{title}</h3>
            <p className="auth-subTitle">{subTitle}</p>
          </div>
          <div className="auth-form">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(AuthLayout);
