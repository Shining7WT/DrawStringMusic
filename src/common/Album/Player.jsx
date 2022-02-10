import React from 'react';
import {
    PlusIcon
} from '@heroicons/react/outline';
import album from '../../assets/album.png';
import {ReactComponent as PlayIcon} from "../../assets/icons/Icon.svg";
import {ReactComponent as PauseIcon} from "../../assets/icons/pause.svg";


const Player = ({item}) => {
    return (
        <div className={`flex items-center justify-between py-2.5 px-8 antialiased ${item === 1 && 'bg-trackHover rounded-2xl'}`}>
            <div className="flex items-center space-x-3">
                {
                    item === 1 ? <PauseIcon className="w-2.5 h-2.5"/> : <PlayIcon className="w-2.5 h-2.5"/>
                }
                <img src={album} className="h-11 w-11" alt=""/>
                <PlusIcon className="w-3 h-3 text-gray-400"/>
                <p className=" text-sm">Lorem ipsum dolor sit amet</p>
            </div>
            <p className="font-ep text-xs">4:32</p>
        </div>
    );
};

export default Player;