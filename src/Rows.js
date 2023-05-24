import React, { useContext } from "react";
import Context from "./Context";

function Rows() {
  const { data, keys } = useContext(Context);

  // Make sure keys are set
  // No need to check for data,
  //  already checked in DataTable component
  if (!keys) {
    return null;
  }

  return data.map((item, index) => (
    <tr key={index}>
      {keys.map((key, i) => (
        <td key={i}>{item[key]}</td>
      ))}
    </tr>
  ));
}

export default Rows;
