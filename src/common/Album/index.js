import React from 'react';
import Player from "./Player";

const Album = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <p className="text-xl leading-normal font-bold">Album Name</p>
                <button className="border-2 border-white py-1.5 px-6 text-sm rounded-full font-semibold">Play All</button>
            </div>
            <div className="py-6">
                {
                    [1, 2, 3, 4, 5].map((item) => <Player key={item} item={item}/>)
                }
            </div>
        </>
    );
};

export default Album;