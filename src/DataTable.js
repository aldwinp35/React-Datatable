import { useState, useEffect, useMemo } from "react";
import Options from "./Options";
import Headers from "./Headers";
import Rows from "./Rows";
import Pagination from "./Pagination";
import Context from "./Context";
import { checkObjectKeys } from "./helpers";

function DataTable({ options }) {
  const [data, setData] = useState(null);
  const [keys, setKeys] = useState(null);

  useEffect(() => {
    /* Set data and keys */

    // Make sure data is passed
    if (!options.data) {
      throw new Error('Missing "data" in datatable optinos.');
    }

    // Set data
    setData(options.data);

    // Make sure data is set
    if (!data || data.length === 0) {
      return;
    }

    // Get keys
    const myKeys = checkObjectKeys(data[0], options?.fields);

    // Set keys
    setKeys(myKeys);
  }, [options.data, options.fields, data]);

  const values = useMemo(() => {
    return {
      keys,
      data
    };
  }, [data, keys]);

  // Show blank state data
  if (!data || data.length === 0) {
    return <div>No data</div>;
  }

  return (
    <Context.Provider value={values}>
      <Options />
      <table>
        <thead>
          <tr>
            {/* Render each key as header (th) */}
            <Headers />
          </tr>
        </thead>
        <tbody>
          {/* Render each data object as row (tr) */}
          <Rows />
        </tbody>
      </table>
      <Pagination />
    </Context.Provider>
  );
}

export default DataTable;
