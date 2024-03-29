import React, {useState, useEffect} from "react";
import Axios from "axios";
import router from "next/router";
import {useToasts} from "react-toast-notifications";

const PostBlog = () => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const addBlogData = (e) => {
        const url = "http://localhost:8000/api/blogs/postblog";
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);
        Axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                if (res?.data.message === "blog posted successfully") {
                    addToast(res.data.message, {
                        appearance: "success",
                    });
                    setTimeout(() => {
                        router.push("/blog");
                    }, 1000);
                } else {
                    setError(true);
                }
                router.push('/blog');
            })
            .catch((err) => {
                console.log(err);

            });
    };
    const handleChange = (e) => {
        setImage(e.target.files[0]
        );
    };
    const {addToast} = useToasts()
    return (

        <div className="flex justify-center items-center" style={{background: "#f5f5f5", height: "100vh"}}>
            <div className="  w-3/5 p-5 rounded-xl shadow-xl mx-auto" style={{background: "#ffffff"}}>
                <h1 className="text-center text-primary text-2xl font-bolder">Add Destination</h1>
                <form className="mx-auto" style={{width: "fit-content"}} onSubmit={(e) => addBlogData(e)}>
                    <div>
                        <label className="p-2">Title</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">Description</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="text" id="description"
                               onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div>
                        <label className="p-2">Image</label><br/>
                        <input className="border mx-2 p-3 rounded" style={{width: "500px", background: "#f5f5f5"}}
                               required type="file" id="image" onChange={(e) => handleChange(e)}/>
                    </div>

                    <button className="border py-3 mb-5 rounded mx-auto mx-2 mt-4 bg-pmry hover:bg-blue-800 text-white"
                            style={{width: "500px"}}>Submit
                    </button>
                </form>
            </div>

        </div>
    )
};

export default PostBlog;