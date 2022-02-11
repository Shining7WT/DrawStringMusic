import React from 'react';
import Player from "./Player";

const Album = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
                <p className="text-xl leading-normal font-bold">Album Name</p>
                <button className="border-2 border-white flex items-center justify-center h-[32px] px-5 shadow-[0px 10px 30px rgba(0, 0, 0, 0.1)] text-sm rounded-full font-semibold">Play All</button>
            </div>
            <div className="flex flex-col space-y-2">
                {
                    [1, 2, 3, 4, 5].map((item) => <Player key={item} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Album;