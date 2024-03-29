import React, {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import SettingTab from "../components/componentsFiles/userAccount/settingTabs";
import {useToasts} from "react-toast-notifications";
import jwt from "jsonwebtoken";
import {getCookie} from "../components/componentDatas/userdetails/userdataCookies";

const AccountSetting = () => {
    var cookieDatas = jwt.decode(getCookie("token"));
    const url = `http://localhost:8000/api/auth/user/${cookieDatas.id}`;
    const [data, setData] = React.useState({
        email: cookieDatas.email,
        name: cookieDatas.name,
        phone: "",
    });
    const [error, setError] = React.useState("");
    const updateAccount = (e) => {
        e.preventDefault();
        axios
            .put(url, {
                email: data.email,
                name: data.name,
                phone: data.phone,
            })
            .then((res) => {
                setError(res.data.message);
                return addToast(res.data.message, {appearance: "info"});
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    const handleChange = (e) => {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);
    };
    const {addToast} = useToasts();

    return (
        <main className="bg-greyish p-5" style={{height: "104vh"}}>
            <h1 className="text-primary text-3xl font-bold mt-10 text-center">
                Account Settings
            </h1>
            <SettingTab/>
            <div className="flex w-4/5 mx-auto">
                <Link href="/account">
                    <a
                        className="capitalize outline-none p-5 hover:bg-pmry rounded-tr-xl rounded-tl-xl hover:duration-1000"
                        style={{background: "#ffffff"}}
                    >
                        account
                    </a>
                </Link>
                <Link href="/bookinghistory">
                    <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000"
                    >
                        My Bookings
                    </a>
                </Link>
                <Link href="/notifications">
                    <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
                        notifications
                    </a>
                </Link>
                <Link href="/useraddress">
                    <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
                        address
                    </a>
                </Link>
            </div>
            <div
                className="flex flex-col w-4/5 mx-auto rounded-tr-xl rounded-bl-xl rounded-br-xl p-5"
                style={{background: "#ffffff"}}
            >
                <form action="" onSubmit={(e) => updateAccount(e)}>
                    <input
                        onChange={(e) => handleChange(e)}
                        className="rounded-md w-3/5 p-3 my-5"
                        style={{background: "#f5f5f5"}}
                        type="text"
                        name="name"
                        id="name"
                        placeholder={cookieDatas.name || "name"}
                        disabled
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        className="rounded-md w-3/5 p-3 my-5"
                        style={{background: "#f5f5f5"}}
                        type="email"
                        name="email"
                        id="email"
                        placeholder={cookieDatas.email || "email"}
                        disabled
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        className="rounded-md w-3/5 p-3 my-5"
                        style={{background: "#f5f5f5"}}
                        type="text"
                        name="gender"
                        id="gender"
                        placeholder="gender"
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        className="rounded-md w-3/5 p-3 my-5"
                        style={{background: "#f5f5f5"}}
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder={cookieDatas.phone || "phone"}
                    />
                    <br/>
                    {error ? (
                        <div
                            class="bg-blue-100 border mb-4 w-3/5  border-blue-500 text-blue-700 px-4 py-3"
                            role="alert"
                        >
                            <p class="font-bold">Your information will update on next <b>"Login"</b></p>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <button className="p-3 bg-pmry text-white w-52" type="submit">
                        Update
                    </button>
                </form>
            </div>
        </main>
    );
};

const Account = () => {
    return (
        <main>
            <AccountSetting/>
        </main>
    );
};

export default Account;
