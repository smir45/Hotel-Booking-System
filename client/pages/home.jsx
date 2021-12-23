import * as React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="border border-pmry w-full h-2 py-5">
          <h1 className="border text-center text-gray-500">Don’t forget to subscribe to our Newsletter for receiving our offers and propotions</h1>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <HomePage />
    </main>
  );
};
module.exports = Home;
