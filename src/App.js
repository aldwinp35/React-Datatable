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
