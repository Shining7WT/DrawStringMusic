import React from 'react';
import {
    PlusIcon
} from '@heroicons/react/outline';
import album from '../../assets/album.png';
import {ReactComponent as PlayIcon} from "../../assets/icons/Icon.svg";
import {ReactComponent as PauseIcon} from "../../assets/icons/pause.svg";


const Player = ({item}) => {
    return (
        <div className={`flex items-center justify-between py-2.5 px-8 ${item === 1 && 'bg-trackHover rounded-2xl'}`}>
            <div className="flex items-center space-x-3">
                {
                    item === 1 ? <PauseIcon className="w-4 h-4"/> : <PlayIcon className="w-4 h-4"/>
                }

                <img src={album} className="h-14" alt=""/>
                <PlusIcon className="w-6 h-6 text-gray-400"/>
                <p className="text-lg">Lorem ipsum dolor sit amet</p>
            </div>
            <p>4:32</p>
        </div>
    );
};

export default Player;