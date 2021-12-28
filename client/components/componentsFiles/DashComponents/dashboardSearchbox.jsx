import * as React from "react";

const Contents = {
  search: "Search",
  dest: "Destination",
  arraival: "Arrival",
  depature: "Depature",
  date: "Date",
  number: "Number of person",
  number: "Number of Persons",

};

const DashboardSearchBoxElements = () => {
  return (
    <main className="flex sm:flex-col justify-center items-center py-2 bg-gray-100">
      <div className="flex p-5 sm:flex-col sm:w-screen xsm:w-screen xsm:flex-col fold:flex-col fold:w-screen md:flex-col md:w-screen lg:flex-row lg:w-full lg:justify-center">
        <div className="mx-1">
          <p className="font-bold text-primary p-2">{Contents.dest}</p>
          <input
            className="p-5 rounded shadow-lg  md:w-full sm:w-full xsm:w-full fold:w-full"
            type="search"
            name="search"
            id="search"
            placeholder="Biratnagar"
          />
        </div>
        <div className="mx-1">
          <p className="font-bold text-primary p-2">{Contents.arraival}</p>
          <input
            className="p-5  rounded shadow-lg md:w-full sm:w-full xsm:w-full fold:w-full"
            type="date"
            name="arrival"
            id="arrival"
          />
        </div>
        <div className="mx-1">
          <p className="font-bold text-primary p-2">{Contents.depature}</p>
          <input
            className="p-5 rounded shadow-lg md:w-full sm:w-full xsm:w-full fold:w-full"
            type="date"
            name="departure"
            id="departure"
          />
        </div>
        <div className="mx-1">
          <p className="font-bold text-primary p-2">{Contents.number}</p>
          <input
            className="p-5  rounded shadow-lg md:w-full sm:w-full xsm:w-full fold:w-full"
            type="number"
            name="person"
            id="person"
            placeholder="1"
          />
        </div>
        <div>
          <p className="p-2 select-none text-white">search</p>
          <button
            type="submit"
            className="mx-1  rounded shadow-lg py-5 px-16 bg-pmry text-white font-bold md:w-full sm:w-full xsm:w-full fold:w-full hover:bg-blue-700 hover:transition-all hover:duration-900"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

const DashboardSearchBox = () => {
  return (
    <div>
      <DashboardSearchBoxElements />
    </div>
  );
};

export default DashboardSearchBox;
