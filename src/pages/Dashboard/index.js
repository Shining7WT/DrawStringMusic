import React, {useEffect, useState} from 'react';
import Album from "../../common/Album";
import HowItWork from "../../common/HowItWork";

const Dashboard = () => {
    return (
        <div className="bg-body w-full h-screen px-16 text-white font-hk pt-10">
            <div className="grid md:grid-cols-2 gap-[50px] h-full">
                <Album/>
                <HowItWork/>
            </div>

        </div>
    );
};

export default Dashboard;
