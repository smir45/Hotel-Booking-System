import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';


var datas
const columns = [
  {
    field: "uniqueKey",
    headerName: "Unique Key",
    type: "text",
    width: 350,
    editable: false,
  },
  {
    field: "latitude",
    headerName: "Latitude",
    type: "text",
    width: 210,
    editable: false
  },
  {
    field: "longitude",
    headerName: "Longitude",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "title",
    headerName: "Name",
    type: "text",
    width: 210,
    editable: false,
  },
  {
    field: "review_score",
    headerName: "Rating",
    width: 100,
    editable: false,
  }

];
export default function DestinationTableGrid() {
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels");
      setRows(result.data.data || []);
      // removing datas with same name
      datas = result.data.data.reverse()
      const uniqueData = datas.filter((item, index) => {
        return datas.findIndex(i => i.title === item.title) === index;
      });

      setDestinations(uniqueData);

      
      setLoading(false);
    };
    fetchData();
  }, []);


  return (
    <div className="shadow-xl mx-auto" style={{ height: 400, border: "none", width: "90%" }}>
      <DataGrid
        rows={destinations}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
