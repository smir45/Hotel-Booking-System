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
    <div className="flex h-[100vh] justify-center items-center">
      
      <form action="" onSubmit={(e) => addHotelData(e)}>
      <h1 className="text-2xl my-5 text-center text-primary">Upload Hotel Images</h1>
        <div>
          <input
            className="border mx-2 p-5 rounded"
            style={{ width: "500px", background: "#f5f5f5" }}
            required
            type="file"
            multiple
            id="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        
        <button className="p-5 text-white bg-pmry w-[500px] ml-2" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Hotelimages;
