import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';


function UserTable(props) {
  return (
    <Box sx={{ padding: '10px', display: 'flex' }}>
    </Box>
  );
}

UserTable.propTypes = {
  status: PropTypes.oneOf(['connected', 'disconnected']).isRequired,
};

export { UserTable };

export default function UserDataTable() {
  const [status, setStatus] = React.useState('connected');
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <Box sx={{ width: 1 }}>
      <Box className="mx-auto shadow-xl my-2" sx={{ height: 350, width: .9, mb: 2 }}>
        <DataGrid
          {...data}
        />
      </Box>
    </Box>
  );
}