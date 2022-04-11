import React, {useState, useEffect} from "react";
import Axios from "axios";
import router from "next/router";
import {useToasts} from "react-toast-notifications";

const AddHotel = () => {
    const [error, setError] = useState(false);
    const [data, setData] = useState()
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    const addHotelData = (e) => {
        const url = "http://localhost:8000/api/hotels/post";
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("desc", desc);
        formData.append("city", city);
        formData.append("country", country);
        formData.append("state", state);
        formData.append("image", image);
        Axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                if (res?.data.message === "Destination posted successfully") {
                    addToast(res.data.message, {
                        appearance: "success",
                    });
                    setTimeout(() => {
                        router.push("/admin/hotelimages");
                    }, 1000);
                } else {
                    setError(true);
                }
                router.push('/admin/hotelimages');
            })
            .catch((err) => {
                setError(err.response.data.message);
                addToast(err.response.data.message, {
                    appearance: 'error'
                });

            });
    };
    const handleChange = (e) => {
        setImage(e.target.files[0]
        );
    };
    console.log(image);
    const {addToast} = useToasts()
    return (

        <div className="flex justify-center items-center" style={{background: "#f5f5f5", height: "100vh"}}>
            <div className="  w-3/5 p-5 rounded-xl shadow-xl mx-auto" style={{background: "#ffffff"}}>
                <h1 className="text-center text-primary text-2xl font-bolder">Add Destination</h1>
                <form className="mx-auto" style={{width: "fit-content"}} onSubmit={(e) => addHotelData(e)}>
                    <div>
                        <label className="p-2">Title</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">Description</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="desc"
                               onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">Image</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="file" id="image" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label className="p-2">City</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="city" onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">Country</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="country"
                               onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">State</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="state" onChange={(e) => setState(e.target.value)}/>
                    </div>

                    <button className="border py-3 mb-5 rounded mx-auto mx-2 mt-4 bg-pmry hover:bg-blue-800 text-white"
                            style={{width: "500px"}}>Submit
                    </button>
                </form>
            </div>

        </div>
    )
};

export default AddHotel;