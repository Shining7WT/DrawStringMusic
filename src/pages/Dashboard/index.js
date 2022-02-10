import React, {useEffect, useState} from 'react';
import Album from "../../common/Album";

const Dashboard = () => {
    return (
        <div className="bg-body w-full h-screen px-20 text-white">

            <div className="flex flex-col h-full py-4">
                <div className="w-1/2 font-hk">
                    <Album/>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
