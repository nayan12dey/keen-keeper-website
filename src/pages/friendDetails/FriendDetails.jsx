

import React, { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { PiBellSimpleZ } from "react-icons/pi";
import { BiBox } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";






// const friendsPromise = fetch("/friends.json").then(res => res.json());


const FriendDetails = () => {

    const { friendId } = useParams();
    console.log("friendId", friendId)

    // const friends = use(friendsPromise);

    const friends = useLoaderData();
    console.log(friends)


    const expectedFriend = friends.find(friend => friend.id === Number(friendId));
    console.log(expectedFriend)


    return (
        <div className='grid grid-cols-2 container mx-auto'>
            {/* This is Friend Details Section */}

            {/* left column */}
            <div>
                <div>
                    <div to={`/friendDetails/${expectedFriend.id}`} key={expectedFriend.id} className="card bg-base-200 shadow-sm p-4 w-auto hover:shadow-lg transition mb-3">
                        <figure>
                            <img src={expectedFriend.picture} alt={expectedFriend.name} />
                        </figure>

                        <div className="card-body">
                            <h2 className="font-bold text-center text-xl">
                                {expectedFriend.name}
                            </h2>

                            <p className='text-center'>
                                {expectedFriend.days_since_contact}d ago
                            </p>

                            <div className="flex justify-center">
                                <div className={`border rounded-xl px-2 py-1 text-white ${expectedFriend.status === "Overdue" ? "bg-red-500" : expectedFriend.status === "Almost due" ? "bg-yellow-500" : "bg-[#244D3F]"}`}>
                                    {expectedFriend.status}
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                {expectedFriend.tags.map((tag, index) => (
                                    <div key={index} className="badge bg-[#CBFADB] text-[#244D3F] font-semibold">
                                        {tag.toUpperCase()}
                                    </div>
                                ))}
                            </div>

                            <div className='text-center text-gray-500'>
                                <p>"{expectedFriend.bio}"</p>
                                <p>Preferred: {expectedFriend.email}</p>
                            </div>



                        </div>
                    </div>

                    <div className='flex flex-col gap-2 mb-5'>
                        <button className='btn'><PiBellSimpleZ className='text-xl' />
                            Snooze 2 weeks</button>
                        <button className='btn'><BiBox className='text-xl' />
                            Archive</button>
                        <button className='btn text-red-500'><RiDeleteBinLine className='text-xl' />Delete</button>
                    </div>
                </div>
            </div>

            {/* right column */}
            <div>
                <div>
                    <div className='flex flex-col items-center'>
                       <p>{expectedFriend.days_since_contact}</p>
                       <p>Days Since Contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;