import { FiSearch } from "react-icons/fi"
const DashboardBannerElements = () => {

    return(
        <main>
            <div className="container p-5 min-w-full">
                <div className="flex p-5 w-11/12 items-center m-auto justify-center border-2 ">
                <input className="border-solid border-2 p-2 w-80 " type="search" name="search" id="search" placeholder="Search your destination" />
                <FiSearch className="hidden lg:inline-flex h-8 rounded-full cursor-pointer text-2xl"/>
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