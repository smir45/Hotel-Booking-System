import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  return {
    props: {
      elements : data
    },
  };
}

function SearchDatas({ elements }) {
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

export default SearchDatas;