import * as React from "react";
import Link from "next/link";
import axios from "axios";
import SettingTab from "../components/componentsFiles/userAccount/settingTabs";
import Khalti from "../components/componentsFiles/DashComponents/khalti/khalti";
import {FaCalendarAlt} from "react-icons/fa";
import { getCookie } from "../components/componentDatas/userdetails/userdataCookies";
import jwt from "jsonwebtoken";
const paymentinfo = () => {
    const [history, setHistory] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        const token = getCookie("token");
        const decoded = jwt.decode(token);
        setUser(decoded);
        try{
            const res = axios.get(`http://localhost:8000/api/hotels/user/history/2`).then(res => {
            setHistory(res.data.data.reverse());
            setLoading(false);
        });
        }catch(err){
            console.log(err);
        }

    }, []);
    return (
        <main
            className="bg-greyish p-5"
            style={{height: "145vh"}}
        >
            <h1 className="text-primary text-3xl font-bold mt-10 text-center">
                Account Settings
            </h1>
            <SettingTab/>
            <div className="flex w-4/5 mx-auto">
                <Link href="/account">
                    <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
                        account
                    </a>
                </Link>
                <Link href="/bookinghistory">
                    <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000"
                       style={{background: "#ffffff"}}>
                        My Bookings
                    </a>
                </Link>

                <Link href="/notifications">
                    <a className="capitalize outline-none p-5 hover:bg-pmry rounded-tr-xl rounded-tl-xl hover:text-white hover:duration-1000">
                        notifications
                    </a>
                </Link>
                <Link href="/useraddress">
                    <a
                        className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000"

                    >
                        address
                    </a>
                </Link>
            </div>
            <div
                className="flex flex-col p-5 w-4/5 mx-auto mb-5 rounded-tr-xl  rounded-bl-xl rounded-br-xl "
                style={{background: "#ffffff", height: "94vh", overflowY: "scroll"}}
            >
                <div>
                    <h1 className="text-primary text-3xl font-bold mt-10 underline">My Booking History</h1>
                    <div>
                        {history.map((h, index) => {
                            return (
                                <div>
                                    <div className="shadow-lg my-5 p-5">
                                        <h1 className="font-bold text-xl text-pmry">
                                            {h.hotel?.title}
                                        </h1>
                                        <p>{h.status}</p>
                                        <p className="flex">Checkin Date: &nbsp;
                                            <span
                                                className="my-1 mx-2"><FaCalendarAlt/></span> {new Date(h.checkin).toDateString()}
                                        </p>
                                        <p className="flex">Checkout Date: &nbsp; <span
                                            className="my-1 mx-2"><FaCalendarAlt/></span>{new Date(h.checkout).toDateString()}
                                        </p>
                                    </div>


                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default paymentinfo;