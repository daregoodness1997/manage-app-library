import React, { FC, memo, useState } from "react";
import cx from "classnames";
import { Content as CarbonContent } from "@carbon/react";

export interface Props {
  children?: React.ReactNode | React.ReactElement;
  useResponsiveOffset?: boolean;
}

const Content: FC<Props> = ({ children, useResponsiveOffset = true }) => {
  const classNameFirstColumn = cx({
    "cds--col-lg-13": true,
    "cds--offset-lg-3": useResponsiveOffset,
  });
  const content = (
    <div className="cds--grid">
      <div className="cds--row">
        <div className={classNameFirstColumn}>{children}</div>
      </div>
    </div>
  );
  const style = {
    height: "100%",
  };
  return (
    <CarbonContent id="main-content" style={style}>
      {content}
    </CarbonContent>
  );
};

export default memo(Content);
