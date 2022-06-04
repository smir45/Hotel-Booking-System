// import React from "react";
import NavHeaderDashboard from "../../components/componentsFiles/header";
import React, {useState, useEffect} from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import {io} from "socket.io-client";

const DefaultChatMsg = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = React.useState([]);
    const [text, setText] = useState("");
    const [socket, setSocket] = React.useState(null);
    const [receivedMessage, setReceivedMessage] = React.useState([]);

    useEffect(() => {
        const socket = io("http://localhost:8000");
        
        setSocket(socket);
        socket.on("message", (message) => {
            setReceivedMessage([...receivedMessage, message]);
            console.log(message)
        });
        
    }, []);

    

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, text]);
        setText("");
        socket.emit("chat", text);
    };
    return (
        <div className="flex">
            <NavHeaderDashboard/>
            <div
                className="w-4/5  mx-auto my-2"

            >
                <div style={{
                    height: "80vh",
                    maxHeight: "80vh",
                    overflow: "auto",
                    padding: "10px",
                }}>
                    <div
                        className="p-5 overflow-y-scroll"
                    >
                        <ChatMsg avatar={""} messages={receivedMessage}/>
                        <ChatMsg
                            side={"right"}
                            messages={
                                messages
                            }
                        />
                    </div>
                </div>
                <form
                    className="flex justify-evenly mt-5 p-5 items-center"
                    style={{
                        background: "#f5f5f5",
                    }}
                    onSubmit={(e) => handleSend(e)}
                >
          <textarea
              rows="2"
              className="w-4/5 border-[1.5px] border-primary rounded-lg py-3 px-5 my-1 font-medium text-body-color placeholder-body-color outline-none"
              name="message"
              id="message"
              value={text}
              placeholder="Type a message"
              onChange={(e) => setText(e.target.value)}
          />
                    <button
                        className="bg-pmry rounded-lg text-white h-1/3 p-5 "
                        style={{
                            width: "200px",
                            float: "right",
                        }}
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DefaultChatMsg;
