import React, {useState, useEffect} from "react";
import { FiSearch } from "react-icons/fi";
import DateRangeComponent from "../components/componentsFiles/DateRangeComponent";

const SearchPageElements = () => {
    const [searchInput, setSearchInput] = useState("");
   
  return (
    <main>
      <div className="container p-5 min-w-full">
        <div className="flex p-5 w-auto items-center m-auto justify-center border-2 ">
          <div className="flex">
            <input
              className="p-2 w-80 border-2 rounded-l-xl border-pmry outline-none "
              type="search"
              name="search"
              id="search"
              placeholder="Search your destination"
            />
            <div className="text-white bg-pmry p-2 border-2 rounded-r-xl border-pmry">
              <FiSearch className="text-2xl" />
            </div>
          </div>
          <div className="date">
              {/* <DateRangeComponent /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

const SearchPage = () => {
  return (
    <main>
      <SearchPageElements />
    </main>
  );
};

export default SearchPage;
