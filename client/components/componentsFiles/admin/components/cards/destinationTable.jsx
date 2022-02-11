import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';


var datas
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "uuid",
    headerName: "Unique Key",
    type: "text",
    width: 310,
    editable: false,
  },
  {
    field: "name",
    headerName: "Full Name",
    type: "text",
    width: 210,
    editable: false
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "edit",
    headerName: "EDIT",
    width: 100,
    type: "button",
  }

];
export default function DestinationTableGrid() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/auth/host/user/");
      setRows(result.data);
      datas = result.data
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(rows);

  return (
    <div className="shadow-xl mx-auto" style={{ height: 400, border: "none", width: "90%" }}>
      <DataGrid
        rows={datas}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
