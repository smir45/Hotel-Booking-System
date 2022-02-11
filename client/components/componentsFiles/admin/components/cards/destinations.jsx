import React from "react";
import DestinationTableGrid from "../cards/destinationTable";

const DestinationCard = () => {
  return (
    <div>
      <div className="border-2">
        <h1>Destinations</h1>
        <DestinationTableGrid />
      </div>
    </div>
  );
};

export default DestinationCard;
