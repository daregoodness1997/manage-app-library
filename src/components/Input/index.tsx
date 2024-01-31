import React, { FC, memo } from "react";

import { NumberInput, TextInput } from "@carbon/react";

interface Props {
  id: string;
  labelText: string;
  type?: "text" | "number" | "password";
}

const Input: FC<Props> = ({ id, labelText, type = "text" }) => {
  switch (type) {
    case "text":
      return <TextInput id={id} labelText={labelText} />;
    case "number":
      return <NumberInput id={id} />;
    default:
      return <TextInput id={id} labelText={labelText} />;
  }
};

export default memo(Input);
