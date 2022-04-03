// import * as React from "react";
import DashboardNavigation from "../components/componentsFiles/dashboard";
import {getCookie} from ".././components/componentDatas/userdetails/userdataCookies";
import jwt from "jsonwebtoken";
import React, {useState, useEffect} from "react";
import {io} from 'socket.io-client';

const HomePage = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

const Home = () => {
    const [user, setUser] = useState(null);
    const [socket, setSocket] = useState(null);
    const [notifications, setNotifications] = useState([]);

    const token = getCookie("token");
    const decoded = jwt.decode(token);
    localStorage.setItem("user_details", decoded);
    // useEffect(() => {
    //     setSocket(io("http://localhost:5500"));
    //
    // }, []);
    //
    // useEffect(() => {
    //     socket?.emit("newUser", {
    //         user: decoded.user_id
    //     });
    //     socket?.on("onlineUsers", (data) => {
    //         console.log(data);
    //         setNotifications(data);
    //     });
    // }, [socket, user]);
    return (
        <main>
            <DashboardNavigation user={user?.id} socket={socket}/>
        </main>
    );
};
module.exports = Home;
