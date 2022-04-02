import React, {useState, useEffect} from 'react';

const SearchBarDashboard = () => {
    return (
        <main>
            <div className="mx-auto p-4 flex justify-center items-center" style={{
                height: '30vh',
                backgroundColor: '#f5f5f5',
            }}>
                <input className="border border-r-0 border-pmry p-5 rounded-l-2xl w-8/12" type="search"
                       placeholder="Which city do you want to travel ?"/>
                <button type="submit"
                        className="border border-l-0 border-pmry bg-pmry outline-none focus:outline-none text-white p-5 rounded-r-2xl">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
        </main>
    )
}


export default SearchBarDashboard;