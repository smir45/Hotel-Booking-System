import * as React from "react";
import Link from "next/link";
import axios from "axios";

const SettingTab = () => {
    return(
        <main>
            <div className="flex border w-4/5 mx-auto" style={{background: "#ffffff"}}>
            <Link href="/userinfo"><a className="border-pmry capitalize outline-none p-5 hover:bg-pmry hover:text-white hover:duration-1000">account</a></Link>
            <Link href="/payementinfo"><a className="border-pmry capitalize outline-none p-5 hover:bg-pmry hover:text-white hover:duration-1000">payment</a></Link>
            <Link href="/notifications"><a className="border-pmry capitalize outline-none p-5 hover:bg-pmry hover:text-white hover:duration-1000">notifications</a></Link>
            <Link href="/userinfo"><a className="border-pmry capitalize outline-none p-5 hover:bg-pmry hover:text-white hover:duration-1000">address</a></Link>
            </div>
        </main>
    )
}

export default SettingTab;
