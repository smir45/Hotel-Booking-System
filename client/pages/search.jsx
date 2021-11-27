import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function SearchPage() {
// fetch data from api using axios
  const [data, setData] = useState([])
  useState(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setData(res.data))
  })


  return (
    <>
      <h1>Search Datas</h1>
      {elements.map((element) => {
        return (
          <main key={element.id}>
            <h1>
              {element.title} {element.id}
            </h1>
            {console.log(element.id)}
          </main>
          
        );
      })}
    </>
  );
}

export default SearchPage;