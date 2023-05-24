import React, { useContext } from "react";
import Context from "./Context";
import { toTitle } from "./helpers";

function Headers() {
  const { keys } = useContext(Context);

  // Make sure keys are set
  if (!keys) {
    return null;
  }

  return keys.map((key, index) => <th key={index}>{toTitle(key)}</th>);
}

export default Headers;
