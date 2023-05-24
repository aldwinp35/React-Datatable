# React-Datatable

Minimal example of a react datatable.

### Basic Implementation

```js
import React from "react";
import DataTable from "./DataTable";
import myData from "./mock_data.json";

function App() {
  return (
    <>
      <DataTable
        options={{
          data: myData,
          fields: ["first_name", "last_name", "email"]
        }}
      />
    </>
  );
}

export default App;
```

### Options
``data`` data to display.
``fields (optional)`` fields to be shown in the table.
