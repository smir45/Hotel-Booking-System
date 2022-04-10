import React from "react";
import DestinationTableGrid from "../cards/destinationTable";

const DestinationCard = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center p-5 w-11/12 mx-auto">
          <h1 className="text-2xl font-bold text-primary font-bolder">Destinations</h1>
          <a href="/admin/adddestination" className="bg-pmry hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Destination
          </a>
        </div>
        <DestinationTableGrid />
      </div>
    </div>
  );
};

export default DestinationCard;
