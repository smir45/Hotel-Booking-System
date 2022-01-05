import * as React from "react";
import { FaMapMarkedAlt, FaMoneyBillAlt, FaCreditCard } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const contents = {
  title1: "Best Selection",
  desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
  title2: "Reasonable Price",
  icon1: <FaMapMarkedAlt />,
  title4: "24/7 Support",
  title3: "Secure Payment",
  icon2: <FaMoneyBillAlt />,
  icon3: <FaCreditCard />,
  icon4: <MdSupportAgent />,
};

const FeaturesCardElements = () => {
  return (
    <main>
      <div className="flex justify-center p-5">
        <div className="w-4/5 flex justify-evenly p-5 md:flex-col lg:flex-row sm:flex-col xsm:flex-col fold:flex-col">
          <div className="p-2 mx-2 hover:bg-scndry hover:border-pmry ">
            <div
              className=" mx-2 border border-gray-300 rounded-full p-3"
              style={{ width: "fit-content" }}
            >
              <img src="https://i.imgur.com/xpE2dSG.png" alt="map" style={{height:"80px", width: "80px"}} />
            </div>
            <h1 className="p-3 text-primary text-2xl font-bold">
              {contents.title1}
            </h1>
            <p className="p-3 text-gray-300">{contents.desc}</p>
          </div>
          <div
            className="
         p-2 mx-2 hover:bg-scndry"
          >
            <div
              className="mx-2 border border-gray-300 rounded-full p-3"
              style={{ width: "fit-content" }}
            >
              <img src="https://i.imgur.com/mLidYck.png" alt="map" style={{height:"80px", width: "80px"}} />
            </div>
            <h1 className="p-3 text-primary text-2xl font-bold">
              {contents.title2}
            </h1>
            <p className="p-3 text-gray-300">{contents.desc}</p>
          </div>
          <div
            className="
         p-2 mx-2 hover:bg-scndry"
          >
            <div
              className="mx-2 border border-gray-300 rounded-full p-3"
              style={{ width: "fit-content" }}
            >
              <img src="https://i.imgur.com/5iYdCbI.png" alt="map" style={{height:"80px", width: "80px"}} />
            </div>
            <h1 className="p-3 text-primary text-2xl font-bold">
              {contents.title3}
            </h1>
            <p className="p-3 text-gray-300">{contents.desc}</p>
          </div>
          <div
            className="
         p-2 mx-2 hover:bg-scndry"
          >
            <div
              className="mx-2 border border-gray-300 rounded-full p-3"
              style={{ width: "fit-content" }}
            >
              <img src="https://i.imgur.com/BdCpljj.png" alt="map" style={{height:"80px", width: "80px"}} />
            </div>
            <h1 className="p-3 text-primary text-2xl font-bold">
              {contents.title4}
            </h1>
            <p className="p-3 text-gray-300">{contents.desc}</p>
          </div>
        </div>
      </div>
      {/* --------------------- */}
      
      {/* --------------------- */}
    </main>
  );
};

const FeaturesCard = () => {
  return (
    <div>
      <FeaturesCardElements />
    </div>
  );
};

export default FeaturesCard;
