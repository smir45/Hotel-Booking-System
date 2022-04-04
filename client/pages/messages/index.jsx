// import React from "react";
import NavHeaderDashboard from "../../components/componentsFiles/header";
import React, {useState, useEffect} from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import {io} from "socket.io-client";

const DefaultChatMsg = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = React.useState([]);
    const [socket, setSocket] = React.useState(null);

    useEffect(() => {
        const socket = io("http://localhost:5500");
        setSocket(socket);
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, []);

    useEffect(() => {
        socket?.emit("newUser", {
            user: user,
        });
        socket?.on("onlineUsers", (data) => {
            console.log(data);
        });
    }, [socket, user]);

    const handleSend = (message) => {
        e.preventDefault();
        socket.emit("message", message);
    };
    console.log(messages);
    return (
        <div className="flex">
            <NavHeaderDashboard/>
            <div className="11/12 mr-auto ml-5 mt-5 mb-2">
                <ChatMsg
                    avatar={""}
                    messages={[
                        "Hi Jenny, How r u today?",
                        "Did you train yesterday",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
                    ]}
                />
                <ChatMsg
                    side={"right"}
                    messages={[
                        "Great! What's about you?",
                        "Of course I did. Speaking of which check this out",
                    ]}
                />
                <ChatMsg avatar={""} messages={["Im good.", "See u later."]}/>
                <form onSubmit={(e) => handleSend(e)}>
                    <input type="text" name="message" id="message" placeholder="Type a message"
                           onChange={(e) => setMessages(e.target.value)}/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default DefaultChatMsg;
