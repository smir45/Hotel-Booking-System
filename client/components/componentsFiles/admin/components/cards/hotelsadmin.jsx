import React from 'react'
import HotelsTable from '../cards/hotelsTable';
const HotelsAdmin = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center p-5 w-11/12 mx-auto">
          <h1 className="text-2xl font-bold text-primary font-bolder">Hotels</h1>
          <a href="/admin/addhotel" className="bg-pmry hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Hotel
          </a>
        </div>
        <HotelsTable />
      </div>
    </div>
  )
}

export default HotelsAdmin