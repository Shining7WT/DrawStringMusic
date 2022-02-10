import React from 'react';
import {ReactComponent as ImageIcon} from "../../assets/icons/image.svg";

const HowItWork = () => {
    return (
        <div className="w-1/2 space-y-5">
            <div className="flex justify-between">
                <p className="text-xl leading-normal font-bold">How it works</p>
                <button className="py-2 px-6 text-sm rounded-full bg-blue-400 font-semibold">Shop Artist NFTS</button>
            </div>

            <div className="grid grid-cols-3 bg-trackHover px-4 py-8 rounded-xl">

                <div className="flex flex-col items-center space-y-3 text-lg">
                    <div className="border-2 border-indigo-300 p-2.5 rounded-xl">
                        <ImageIcon/>
                    </div>
                    <div className="flex"><p className="text-sky-500 px-1">1. </p> Buy Artist NFT</div>
                </div>

                <div className="flex flex-col items-center space-y-3 text-lg">
                    <div className="border-2 border-indigo-300 p-2.5 rounded-xl">
                        <ImageIcon/>
                    </div>
                    <div className="flex"><p className="text-sky-500 px-1">2. </p> Connect Wallet</div>
                </div>

                <div className="flex flex-col items-center space-y-3 text-lg">
                    <div className="border-2 border-indigo-300 p-2.5 rounded-xl">
                        <ImageIcon/>
                    </div>
                    <div className="flex"><p className="text-sky-500 px-1">2. </p> Listen!</div>
                </div>

            </div>

            <p className="text-xl leading-normal font-bold">About</p>

            <p className="text-sm font-medium antialiased">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                blanditiis consectetur dolores eaque enim eos, explicabo impedit, iste nisi repellat repudiandae
                suscipit tempora. Ducimus eius, eligendi ex expedita fugiat inventore laboriosam libero mollitia
                pariatur praesentium repudiandae, tempore ullam, vero voluptatum?</p>

        </div>
    );
};

export default HowItWork;