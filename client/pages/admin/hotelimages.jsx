import React, {useState, useEffect} from "react";
import Axios from "axios";
import router from "next/router";
import {useToasts} from "react-toast-notifications";

const Hotelimages = () => {
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hotelId, setHotelId] = useState("");
  

  const addHotelData = (e) => {
    const url = "http://localhost:8000/api/image/hotelimages";
    e.preventDefault();
    const formData = new FormData();
    images.map((image) => {
      formData.append("image", image);
    })
    formData.append("hotelId", hotelId);
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
    setImages([...e.target.files]);
    setHotelId(localStorage.getItem("addedhotelId"));
  };
  return (
    <div>
      <h1>Hotel Images</h1>
      <form action="" onSubmit={(e) => addHotelData(e)}>
        <div>
          <label className="p-2 text-2xl text-center">Upload Images</label>
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
        
        <button type="submit">btn</button>
      </form>
    </div>
  );
};

export default Hotelimages;
