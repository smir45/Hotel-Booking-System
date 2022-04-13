import React, { useState, useEffect } from "react";
import Axios from "axios";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const AddHotel = () => {
    const [error, setError] = useState(false);
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [parking, setParking] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [pets, setPets] = useState(false);
  const [swimming_pool, setSwimming_pool] = useState(false);

  const addDestination = (e) => {
    const url = "http://localhost:8000/api/hotels/post";
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("state", state);
    image.map((item) => {
      formData.append("image", item);
    })
    formData.append("parking", parking);
    formData.append("wifi", wifi);
    formData.append("pets", pets);
    formData.append("swimming_pool", swimming_pool);
    Axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res?.data.message === "Destination posted successfully") {
          addToast(res.data.message, {
            appearance: "success",
          });
          
          setTimeout(() => {
            router.push("/admin/hotels");
          }, 1000);
        } else {
          setError(true);
        }
        router.push("/admin/hotels");
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setImage([...e.target.files]);
  };
  console.log(parking);
  const { addToast } = useToasts();
    return (

        <div
      className="flex justify-center items-center"
      style={{ background: "#f5f5f5", height: "100vh" }}
    >
      <div
        className="  w-3/5 p-5 rounded-xl shadow-xl mx-auto"
        style={{ background: "#ffffff" }}
      >
        <h1 className="text-center text-primary text-2xl font-bolder">
          Add Destination
        </h1>
        <form
          className="mx-auto"
          style={{ width: "fit-content" }}
          onSubmit={(e) => addDestination(e)}
        >
          <div>
            <label className="p-2">Title</label>
            <br />
            <input
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2">Description</label>
            <br />
            <textarea
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="text"
              id="desc"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2">Thumbnail</label>
            <br />
            <input
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="file"
              multiple
              id="image"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label className="p-2">City</label>
            <br />
            <input
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2">Country</label>
            <br />
            <input
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="text"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2">State</label>
            <br />
            <input
              className="border mx-2 p-3 rounded"
              style={{ width: "500px", background: "#f5f5f5" }}
              required
              type="text"
              id="state"
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="p-2">
            
            <input type="checkbox" name="wifi" id="wifi" onChange={(e) => setWifi(e.target.value)} />
            <label className="p-2 text-2xl text-center">wifi</label>
            <input type="checkbox" name="parking" id="parking" onChange={(e) => setParking(e.target.value)} />
            <label className="p-2 text-2xl text-center">Parking</label>
            <input type="checkbox" name="pets" id="pets" onChange={(e) => setPets(e.target.value)} />
            <label className="p-2 text-2xl text-center">Pets</label>
            <input type="checkbox" name="swimming" id="swimming" onChange={(e) => setSwimming_pool(e.target.value)} />
            <label className="p-2 text-2xl text-center">Swimming</label>
          </div>
          <button
            className="border py-3 mb-5 rounded mx-auto mx-2 mt-4 bg-pmry hover:bg-blue-800 text-white"
            style={{ width: "500px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    )
};

export default AddHotel;