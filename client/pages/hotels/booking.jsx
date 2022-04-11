import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaCheck,
  FaUserCircle,
  FaInfoCircle,
  FaLock,
  FaBuilding,
} from "react-icons/fa";
import Khalti from "../../components/componentsFiles/DashComponents/khalti/khalti";
import Footer from "../../components/componentsFiles/footer";
import Axios from "axios";
import {useRouter} from "next/router";
import {useToasts} from 'react-toast-notifications'

const booking = () => {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = React.useState("");
  const hotel_name = localStorage.getItem("hotel_name");
  const hotel_slug = localStorage.getItem("hotel_address_zip");

  const booking = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("fname", fname);
      formData.append("lname", lname);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("slug", hotel_slug);
      formData.append("no_of_person", 1);
      Axios.post("http://localhost:8000/api/hotels/booking", formData)
      .then((res) => {
        addToast("Booked Successfully Pleace check your email", {
          appearance: 'success'
      })
        setTimeout(() => {

          router.push("/hotels");
        }, 2000)
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  const {addToast} = useToasts()
  return (
    <div style={{ background: "#f5f5f5" }}>
      <div className="p-2 text-center bg-blue-100 flex justify-center items-center">
        <span className="mx-2" style={{ color: "#097969" }}>
          <FaCheckCircle />
        </span>
        <p className="text-sm" style={{ width: "fit-content" }}>
          Note: Booking is no-refundable and cannot be cancelled
        </p>
      </div>
      <div className="flex w-4/5 mx-auto p-2">
        <div
          className="w-3/5 mr-2 rounded-lg"
          style={{ background: "#ffffff" }}
        >
          <h1
            className="text-2xl py-5 font-bold text-primary px-5"
            style={{ background: "#f5f5f5" }}
          >
            {hotel_name}
          </h1>
          <div className="my-5">
            <div className="flex font-bold text-xl py-2 px-5 border-pmry border-b-2">
              <span className="my-1 mx-1">
                <FaUserCircle />
              </span>
              <h1>Guest details</h1>
            </div>
            <div className="p-5">
              <p style={{ fontSize: "12px" }}>
                Please tell us the name of the guest staying at the hotel as it
                appears on the ID that they’ll present at check-in. If the guest
                has more than one last name, please enter them all.
              </p>
              <p style={{ color: "red", fontSize: "13px" }}>*</p>
              <form>
                <h1>
                  First name{" "}
                  <span style={{ color: "red", fontSize: "13px" }}>*</span>
                </h1>
                <input
                  type="text"
                  className="w-full my-2 border p-2  border-pmry"
                  style={{ width: "350px" }}
                  name="fname"
                  required
                  id="fname"
                  onChange={(e) => setFname(e.target.value)}
                />
                <h1>
                  Last name{" "}
                  <span style={{ color: "red", fontSize: "13px" }}>*</span>
                </h1>
                <input
                  type="text"
                  className="w-full my-2 border p-2  border-pmry"
                  style={{ width: "350px" }}
                  name="lname"
                  required
                  id="lname"
                  onChange={(e) => setLname(e.target.value)}
                />
                
                <h1>
                  Phone{" "}
                  <span style={{ color: "red", fontSize: "13px" }}>*</span>
                </h1>
                <input
                  type="number"
                  className="w-full my-2 border p-2  border-pmry"
                  style={{ width: "350px" }}
                  name="phone"
                  required
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <h1>
                  Email{" "}
                  <span style={{ color: "red", fontSize: "13px" }}>*</span>
                </h1>
                <input
                  type="email"
                  className="w-full my-2 border p-2  border-pmry"
                  style={{ width: "350px" }}
                  name="email"
                  required
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="py-5" style={{ background: "#f5f5f5" }}>
            <p className="p-2 border border-pmry flex">
              <span className="text-primary my-1 mx-2">
                <FaInfoCircle />
              </span>
              If you don’t book now, this brilliant deal could be gone
            </p>
          </div>
          <div className="my-5">
            <div className="flex font-bold text-xl py-2 px-5 border-pmry border-b-2">
              <span className="my-1 mx-1">
                <FaLock />
              </span>
              <h1>Payment details</h1>
            </div>
            <div>
              <p className="p-5">We Accept Khalti</p>
              <div className="w-full mx-5">
                <Khalti />
              </div>
            </div>
            <div>
              
            </div>
            <div>
              {/*<div className="w-full mx-5"><Paypal/></div>*/}

              <input
                className="mx-2 inline-flex form-checkbox h-5 w-5 my-5 ml-5"
                type="checkbox"
                name="hotel"
                value="hotel"
              />
              <label className="" htmlFor="hotel">
                Pay the hotel in their currency
              </label>
            </div>
          </div>
        </div>

        <div className="w-2/5 rounded-lg ml-2">
          <div style={{ background: "#ffffff", height: "fit-content" }}>
            <div className="flex font-bold text-xl py-2 px-5 border-pmry border-b-2">
              <span className="my-1 mx-1">
                <FaBuilding />
              </span>
              <h1>Booking details</h1>
            </div>

            <div className="">
              <div className="p-5">
                <img
                  className="rounded-lg w-full"
                  style={{
                    height: "250px",
                  }}
                  src={localStorage.getItem("hotelimage")}
                  alt=""
                />
              </div>
              <div className="p-5 ">
                <h1 className="text-center text-primary text-2xl font-bold">
                  {localStorage.getItem("hotel_name")}
                </h1>
                <div>
                  <div className="flex justify-center">
                    <h1>
                      {localStorage.getItem("hotel_address_city")}
                      {", "}
                    </h1>
                    &nbsp;
                    <h1>{localStorage.getItem("hotel_address_street")}</h1>
                  </div>
                  <div className="p-5 bg-blue-100 my-5">
                    <h1 className="text-center text-primary text-2xl font-bold">
                      Special Requests
                    </h1>
                    <p>
                      This hotel does not support the special request function.
                    </p>
                  </div>
                  <div className="p-5">
                    <p
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      By submitting this booking, I acknowledge that I have read
                      and agree to Accommod's <strong>Terms of Use</strong> and{" "}
                      <strong>Privacy Statement</strong>.
                    </p>
                    <button
                      onClick={(e) => booking(e)}
                      onSubmit={(e) => booking(e)}
                      className="py-2 px-5 w-full bg-pmry text-white my-5"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-2 my-5"
            style={{
              background: "#ffffff",
            }}
          >
            <h1 className="text-center">
              <strong>Why sign up?</strong>&nbsp;{" "}
              <span className="text-primary">Accommod™ Rewards?</span>
            </h1>
            <div className="flex my-2">
              <span className="my-1 mx-5 text-primary">
                <FaCheck />
              </span>
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                <strong>Enjoy reward* nights</strong> - it’s simple, collect 10
                stamps, get 1 reward* night
              </p>
            </div>
            <div className="flex my-2">
              <span className="my-1 mx-5 text-primary">
                <FaCheck />
              </span>
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                <strong>Save money</strong> - you’ll get access to Secret Prices
              </p>
            </div>
            <div className="flex my-2">
              <span className="my-1 mx-5 text-primary">
                <FaCheck />
              </span>
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                <strong>Flexibility</strong> - collect stamps or redeem reward
                nights on eligible properties, anytime, anywhere
              </p>
            </div>
            <div className="flex my-2">
              <span className="my-1 mx-5 text-primary">
                <FaCheck />
              </span>
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                <strong>Save time</strong> - we’ll remember your preferences to
                speed up your bookings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default booking;
