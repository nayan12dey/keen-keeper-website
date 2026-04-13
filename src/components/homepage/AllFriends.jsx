

import React, { use } from 'react';



const friendsPromise = fetch("/friends.json").then(res => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);

    console.log(friends)


    return (
        <div className='container mx-auto my-12'>
            <h2 className='font-bold text-2xl'>Your Friends</h2>

            <div className='grid grid-cols-4 gap-6 my-13'>
                {
                    friends.map(friend => {
                        return (
                            <div key={friend.id} className="card bg-base-200 shadow-sm p-4 w-auto">
                                <figure>
                                    <img src={friend.picture} alt={friend.name} />
                                </figure>

                                <div className="card-body">
                                    <h2 className="font-bold text-center text-xl">
                                        {friend.name}
                                    </h2>

                                    <p className='text-center'>
                                        {friend.days_since_contact}d ago
                                    </p>

                                    <div className="card-actions justify-center">
                                        {friend.tags.map((tag, index) => (
                                            <div key={index} className="badge bg-[#CBFADB] text-[#244D3F] font-semibold">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center mt-2">
                                        <div className={`border rounded-xl px-2 py-1 text-white ${friend.status === "overdue" ? "bg-red-500" : friend.status === "almost due" ? "bg-yellow-500" :  "bg-[#244D3F]"}`}>
                                            {friend.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;