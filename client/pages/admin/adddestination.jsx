import React, {useState, useEffect} from "react";
import Axios from "axios";
import router from "next/router";
import {useToasts} from "react-toast-notifications";

const AddDestination = () => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState([]);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const addDestination = (e) => {
        const url = "http://localhost:8000/api/destinations/post";
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", title);
        formData.append("desc", desc);
        formData.append("city", city);
        formData.append("state", state);
        image.map((item) => {
            formData.append("image", item);
          })
        Axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                if (res?.message === "Attraction added successfully") {
                    addToast(res.message, {
                        appearance: "success",
                    });
                        router.push("/admin/destinations");
                } else {
                    setError(true);
                }
                router.push("/admin/destinations");
            })
            .catch((err) => {
                setError(err);
                console.log(err);
            });
    };
    const handleChange = (e) => {
        setImage([...e.target.files]);
        localStorage.setItem("addedhotelId", title);
    };
    const {addToast} = useToasts();
    return (
        <div
            className="flex justify-center items-center"
            style={{background: "#f5f5f5", height: "100vh"}}
        >
            <div
                className="  w-3/5 p-5 rounded-xl shadow-xl mx-auto"
                style={{background: "#ffffff"}}
            >
                <h1 className="text-center text-primary text-2xl font-bolder">
                    Add Destination
                </h1>
                <form
                    className="mx-auto"
                    style={{width: "fit-content"}}
                    onSubmit={(e) => addDestination(e)}
                >
                    <div>
                        <label className="p-2">Title</label>
                        <br/>
                        <input
                            className="border mx-2 p-3 rounded"
                            style={{width: "500px", background: "#f5f5f5"}}
                            required
                            type="text"
                            id="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="p-2">Description</label>
                        <br/>
                        <textarea
                            className="border mx-2 p-3 rounded"
                            style={{width: "500px", background: "#f5f5f5"}}
                            required
                            type="text"
                            id="desc"
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="p-2">Thumbnail</label>
                        <br/>
                        <input
                            className="border mx-2 p-3 rounded"
                            style={{width: "500px", background: "#f5f5f5"}}
                            required
                            type="file"
                            multiple
                            id="image"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label className="p-2">City</label>
                        <br/>
                        <input
                            className="border mx-2 p-3 rounded"
                            style={{width: "500px", background: "#f5f5f5"}}
                            required
                            type="text"
                            id="city"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="p-2">State</label>
                        <br/>
                        <input
                            className="border mx-2 p-3 rounded"
                            style={{width: "500px", background: "#f5f5f5"}}
                            required
                            type="text"
                            id="city"
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <button
                        className="border py-3 mb-5 rounded mx-auto mx-2 mt-4 bg-pmry hover:bg-blue-800 text-white"
                        style={{width: "500px"}}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDestination;
