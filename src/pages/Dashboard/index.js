import React, {useEffect, useState} from 'react';
import Album from "../../common/Album";
import HowItWork from "../../common/HowItWork";

const Dashboard = () => {
    return (
        <div className="bg-body w-full h-screen px-14 text-white font-hk">

            <div className="flex space-x-10 h-full p-4">
                <Album/>
                <HowItWork/>
            </div>

        </div>
    );
};

export default Dashboard;
