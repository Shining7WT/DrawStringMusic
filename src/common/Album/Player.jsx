import React from 'react';
import {
    PlusIcon
} from '@heroicons/react/outline';
import albumCOver from '../../assets/album.png';
import {ReactComponent as PlayIcon} from "../../assets/icons/Icon.svg";
import {ReactComponent as PauseIcon} from "../../assets/icons/pause.svg";


const Player = ({item}) => {
    return (
        <div className={`flex items-center justify-between h-[57px] py-[6px] pl-5 pr-[38px] antialiased ${item === 1 && 'bg-[#182438] bg-opacity-60 rounded-[15px]'}`}>
            <div className="flex items-center">
                {
                    item === 1 ? 
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.8125 9.60547C3.32031 9.60547 3.75 9.19531 3.75 8.66797V1.79297C3.75 1.28516 3.32031 0.855469 2.8125 0.855469H0.9375C0.410156 0.855469 0 1.28516 0 1.79297V8.66797C0 9.19531 0.410156 9.60547 0.9375 9.60547H2.8125ZM8.75 8.66797V1.79297C8.75 1.28516 8.32031 0.855469 7.8125 0.855469H5.9375C5.41016 0.855469 5 1.28516 5 1.79297V8.66797C5 9.19531 5.41016 9.60547 5.9375 9.60547H7.8125C8.32031 9.60547 8.75 9.19531 8.75 8.66797Z" fill="#74AAFF"/>
                    </svg>
                    :
                    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28125 4.44922L1.40625 0.386719C0.839844 0.0546875 0 0.386719 0 1.1875V9.3125C0 10.0547 0.78125 10.5039 1.40625 10.1328L8.28125 6.07031C8.88672 5.69922 8.88672 4.82031 8.28125 4.44922Z" fill="white"/>
                    </svg>
                }
                <img src={albumCOver} className="flex-shrink-0 ml-[15px] h-[45px] w-[45px]" alt=""/>
                <button className='ml-[22px] mr-[17px]'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00006 8V14H8.00006V8H14V6H8.00006V0H6.00006V6H0V8H6.00006Z" fill="#596985"/>
                    </svg>
                </button>

                <p className="font-semibold text-sm">Lotus Flower Bomb (feat. Miguel)</p>
            </div>
            <p className="font-ep text-sm">4:32</p>
        </div>
    );
};

export default Player;