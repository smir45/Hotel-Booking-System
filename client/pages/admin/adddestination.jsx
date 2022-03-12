import React, {useState, useEffect} from "react";
import axios from "axios";
import Axios from "axios";
import router from "next/router";
import {useToasts} from "react-toast-notifications";
const AddDestination = () => {
    const [error, setError] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    images: "",
    city: "",
  });

    const addDestination = (e) => {
        const url = "http://localhost:8000/api/destinations/post";
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            description: data.description,
            images: data.images,
            city: data.city,
        })
            .then((res) => {
                if (res.data.message === "Destination posted successfully") {
                    addToast(res.data.message, {
                        appearance: "success",
                    });
                    setTimeout(() => {
                        router.push("/admin/destinations");
                    }, 1000);
                } else {
                    setError(true);
                }
                router.push('/login');
            })
            .catch((err) => {
                setError(err.response.data.message);
                addToast(err.response.data.message, {
                    appearance: 'error'
                });

            });
    };
    const handleChange = (e) => {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };
    const { addToast } = useToasts()
    return (

           <div className="flex justify-center items-center" style={{background: "#f5f5f5", height: "100vh"}}>
               <div className="  w-3/5 p-5 rounded-xl shadow-xl mx-auto" style={{background: "#ffffff"}}>
                   <h1 className="text-center text-primary text-2xl font-bolder">Add Destination</h1>
                   <form className="mx-auto" style={{ width: "fit-content"}} onSubmit={(e) => addDestination(e)}>
                       <div>
                           <label className="p-2">Title</label><br/>
                           <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}} required type="text" id="title" value={data.title} onChange={(e) => handleChange(e)}/>
                       </div>
                       <div>
                           <label className="p-2">Description</label><br/>
                           <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}} required type="text" id="description" value={data.description} onChange={(e) => handleChange(e)}/>
                       </div>
                       <div>
                           <label className="p-2">Image Link</label><br/>
                           <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}} required type="text" id="images" value={data.images} onChange={(e) => handleChange(e)}/>
                       </div>
                       <div>
                           <label className="p-2">City</label><br/>
                           <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}} required type="text" id="city" value={data.city} onChange={(e) => handleChange(e)}/>
                       </div>

                       <button className="border py-3 mb-5 rounded mx-auto mx-2 mt-4 bg-pmry hover:bg-blue-800 text-white" style={{width: "500px"}} >Submit</button>
                   </form>
               </div>

           </div>
    )
};

export default AddDestination;