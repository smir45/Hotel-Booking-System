import React from "react";
import config from "./configKhalti";

import KhaltiCheckout from "khalti-checkout-web";
const Khalti = () => {
    let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <button
      className="border bg-pmry text-white p-3 w-52"
        onClick={function () {
          checkout.show({ amount: 1000 });
        }}
      >
        Pay With Khalti
      </button>
    </div>
  );
};

export default Khalti;
