import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

var datas;
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    type: "numericColumn",
    sortable: true,
  },
  {
    field: "title",
    headerName: "Title",
    type: "text",
    width: 350,
    editable: false,
  },
  {
    field: "desc",
    headerName: "Description",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "city",
    headerName: "City",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "slug",
    headerName: "Slug",
    width: 300,
    editable: false,
  },
  {
    field: "delete",
    headerName: "Delete",
    minWidth: 100,
    editable: false,
    headerAlign: "center",
    renderCell: (params) => {
      console.log(params.row.id);
      const Delete = (e) => {
        e.preventDefault();
        axios
          .delete(`http://localhost:8000/api/destinations/${params.id}`)
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      };
      return (
        <button onClick={Delete}>
          <FaTrash />
        </button>
      );
    },
  },
];
const HotelsTable = () => {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels/");
      setRows(result.data || []);

      setDestinations(rows);

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div
      className="shadow-xl mx-auto"
      style={{ height: "75vh", border: "none", width: "90%" }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default HotelsTable;
