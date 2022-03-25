import React from 'react';
import {FaCheckCircle, FaUserCircle, FaInfoCircle, FaLock} from 'react-icons/fa';
import Khalti from "../../components/componentsFiles/DashComponents/khalti/khalti";

const booking = () => {
    const hotel_name = localStorage.getItem('hotel_name')
    return (
        <div style={{background: "#f5f5f5"}}>
            <div className="p-2 text-center bg-blue-100 flex justify-center items-center">
                <span className="mx-2" style={{color: "#097969"}}><FaCheckCircle/></span>
                <p className="text-sm" style={{width: "fit-content"}}>Note: Booking is
                    no-refundable and cannot be
                    cancelled</p>
            </div>
            <div className="flex w-4/5 mx-auto p-2">
                <div className="w-3/5 mr-2 rounded-lg" style={{background: "#ffffff"}}>
                    <h1 className="text-2xl py-5 font-bold text-primary px-5" style={{background: "#f5f5f5"}}>
                        {hotel_name}
                    </h1>
                    <div className="my-5">
                        <div className="flex font-bold text-xl py-2 px-5 border-pmry border-b-2">
                            <span className="my-1 mx-1"><FaUserCircle/></span>
                            <h1>Guest details</h1>
                        </div>
                        <div className="p-5">
                            <p style={{fontSize: "12px"}}>Please tell us the name of the guest staying at the hotel as
                                it appears on the ID that
                                they’ll present at check-in. If the guest has more than one last name, please enter them
                                all.</p>
                            <p style={{color: "red", fontSize: "13px"}}>*</p>
                            <form>
                                <h1>First name <span style={{color: "red", fontSize: "13px"}}>*</span>
                                </h1>
                                <input type="text" className="w-full my-2 border p-2  border-pmry"
                                       style={{width: "350px"}} name="fname" required
                                       id="fname"/>
                                <h1>Last name <span style={{color: "red", fontSize: "13px"}}>*</span>
                                </h1>
                                <input type="text" className="w-full my-2 border p-2  border-pmry"
                                       style={{width: "350px"}} name="lname" required
                                       id="lname"/>
                                <h1>Email <span style={{color: "red", fontSize: "13px"}}>*</span></h1>
                                <input type="email" className="w-full my-2 border p-2  border-pmry"
                                       style={{width: "350px"}} name="fname" required
                                       id="fname"/>
                                <h1>Phone <span style={{color: "red", fontSize: "13px"}}>*</span></h1>
                                <p style={{fontSize: "13px"}}>We’ll only contact you in an emergency</p>
                                <input type="numbert" className="w-full my-2 border p-2  border-pmry"
                                       style={{width: "350px"}} name="fname"
                                       required
                                       id="fname"/>
                            </form>
                        </div>


                    </div>
                    <div className="py-5" style={{background: "#f5f5f5"}}>

                        <p className="p-2 border border-pmry flex"><span
                            className="text-primary my-1 mx-2"><FaInfoCircle/></span>If
                            you don’t book now, this brilliant deal could be
                            gone</p>
                    </div>
                    <div className="my-5">
                        <div className="flex font-bold text-xl py-2 px-5 border-pmry border-b-2">
                            <span className="my-1 mx-1"><FaLock/></span>
                            <h1>Payment details</h1>
                        </div>
                        <div>
                            <p className="p-5">We Accept Khalti</p>
                            <div className="w-full mx-5"><Khalti/></div>
                        </div>
                        <div>
                            {/*<div className="w-full mx-5"><Paypal/></div>*/}

                            <input className="mx-2 inline-flex form-checkbox h-5 w-5 my-5 ml-5" type="checkbox"
                                   name="hotel"
                                   value="hotel"/>
                            <label className="" htmlFor="hotel">Pay the hotel in their currency</label>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 rounded-lg ml-2" style={{background: "#ffffff"}}>
                    <h1 className="text-2xl font-bold text-primary">
                        Booking Details
                    </h1>

                </div>


            </div>


        </div>
    )
}

export default booking