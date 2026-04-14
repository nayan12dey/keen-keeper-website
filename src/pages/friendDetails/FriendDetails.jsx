

import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { PiBellSimpleZ } from "react-icons/pi";
import { BiBox } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCameraBold } from "react-icons/pi";
import { FriendContext } from '../../context/FriendProvider';



// const friendsPromise = fetch("/friends.json").then(res => res.json());


const FriendDetails = () => {

    const { friendId } = useParams();
    console.log("friendId", friendId)

    // const friends = use(friendsPromise);

    const friends = useLoaderData();
    // console.log(friends)


    const expectedFriend = friends.find(friend => friend.id === Number(friendId));
    // console.log(expectedFriend)


    // for showing due date
    const formatDate = (dateStr) => {
        const [y, m, d] = dateStr.split("-");
        const date = new Date(y, m - 1, d);

        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };


    // used context api from friendProvider
    const {handleCall, storedFriends, handleText, handleVideo} = useContext(FriendContext);
    // console.log("friendContext", handleCall);
    // console.log("StoredFriends", storedFriends)


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 md:gap-8 my-6 md:my-10 px-4">


            {/* left column */}
            <div>
                <div className="card bg-base-200 shadow-sm p-4 w-full md:max-w-[80%] mx-auto hover:shadow-lg transition mb-3">
                    <figure>
                        <img src={expectedFriend.picture} alt={expectedFriend.name} />
                    </figure>

                    <div className="card-body">
                        <h2 className="font-bold text-center text-xl">
                            {expectedFriend.name}
                        </h2>

                        <p className="text-center">
                            {expectedFriend.days_since_contact}d ago
                        </p>

                        <div className="flex justify-center">
                            <div
                                className={`border rounded-xl px-2 py-1 text-white ${expectedFriend.status === "Overdue"
                                    ? "bg-red-500"
                                    : expectedFriend.status === "Almost due"
                                        ? "bg-yellow-500"
                                        : "bg-[#244D3F]"
                                    }`}
                            >
                                {expectedFriend.status}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-wrap">
                            {expectedFriend.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="badge bg-[#CBFADB] text-[#244D3F] font-semibold"
                                >
                                    {tag.toUpperCase()}
                                </div>
                            ))}
                        </div>

                        <div className="text-center text-gray-500">
                            <p>"{expectedFriend.bio}"</p>
                            <p>Preferred: {expectedFriend.email}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 w-full md:max-w-[80%] mx-auto">
                    <button className="btn flex items-center gap-2 justify-center">
                        <PiBellSimpleZ className="text-xl" />
                        Snooze 2 weeks
                    </button>

                    <button className="btn flex items-center gap-2 justify-center">
                        <BiBox className="text-xl" />
                        Archive
                    </button>

                    <button className="btn text-red-500 flex items-center gap-2 justify-center">
                        <RiDeleteBinLine className="text-xl" />
                        Delete
                    </button>
                </div>
            </div>



            {/* right column */}
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <p className="text-3xl font-bold text-[#244D3F]">
                            {expectedFriend.days_since_contact}
                        </p>
                        <p className="mt-2 text-gray-500">Days Since Contact</p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <p className="text-3xl font-bold text-[#244D3F]">
                            {expectedFriend.goal}
                        </p>
                        <p className="mt-2 text-gray-500">Goal (Days)</p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <p className="text-3xl font-bold text-[#244D3F]">
                            {formatDate(expectedFriend.next_due_date)}
                        </p>
                        <p className="mt-2 text-gray-500">Next Due</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col lg:flex-row justify-between gap-4 my-5'>
                    <div className='space-y-2'>
                        <p className='font-bold text-[#244D3F] text-xl'>Relationship Goal</p>
                        <p className='text-xl text-gray-500'>Connect every <span className='font-bold text-black'>{expectedFriend.goal} days</span></p>
                    </div>

                    <div className='flex justify-center lg:justify-end'>
                        <button className='btn'>Edit</button>
                    </div>
                </div>


                <div className='border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col text-left my-5 space-y-3'>
                    <p className='text-lg text-[#244D3F]'>Quick Check-In</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
                        <button className='btn py-10 flex flex-col items-center justify-center gap-2' onClick={() => handleCall(expectedFriend)}>
                            <span className='text-2xl'><FiPhoneCall /></span>
                            Call</button>
                        <button className='btn py-10 flex flex-col items-center justify-center gap-2' onClick={() => handleText(expectedFriend)}>
                            <span className='text-2xl'><LuMessageSquareMore /></span>
                            Text</button>
                        <button className='btn py-10 flex flex-col items-center justify-center gap-2' onClick={() => handleVideo(expectedFriend)}><span ><PiVideoCameraBold className='text-2xl' /></span>
                            Video</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;