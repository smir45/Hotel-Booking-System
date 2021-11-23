import { FiSearch } from "react-icons/fi"
const DashboardBannerElements = () => {

    return(
        <main>
            <div className="container p-5 min-w-full">
                <div className="flex p-5 w-11/12 items-center m-auto justify-center border-2 ">
                <input className="p-2 w-80 border-2 rounded-l-xl border-pmry " type="search" name="search" id="search" placeholder="Search your destination" />
                <div className="text-white bg-pmry p-2 border-2 rounded-r-xl border-pmry">
                    <FiSearch className="text-2xl" />
                </div>
                </div>
            </div>
        </main>
    )
}

const DashboardBanner = () => {
    return(
        <main>
            <DashboardBannerElements />
        </main>
    )
}

export default DashboardBanner;