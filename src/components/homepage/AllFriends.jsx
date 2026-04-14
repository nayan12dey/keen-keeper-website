

import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HashLoader } from 'react-spinners';



// const friendsPromise = fetch("/friends.json").then(res => res.json());

const AllFriends = () => {

    // const friends = use(friendsPromise);

    // console.log(friends)


    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/friends.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <HashLoader color='#244D3F' />
            </div>
        );
    }


    return (
        // <div className='container mx-auto my-12'>
        //     <h2 className='font-bold text-2xl'>Your Friends</h2>

        //     <div className='grid grid-cols-4 gap-6 my-13 '>
        //         {
        //             friends.map(friend => {
        //                 return (
        //                     <Link to={`/friendDetails/${friend.id}`} key={friend.id} className="card bg-base-200 shadow-sm p-4 w-auto hover:shadow-lg transition">
        //                         <figure>
        //                             <img src={friend.picture} alt={friend.name} />
        //                         </figure>

        //                         <div className="card-body">
        //                             <h2 className="font-bold text-center text-xl">
        //                                 {friend.name}
        //                             </h2>

        //                             <p className='text-center'>
        //                                 {friend.days_since_contact}d ago
        //                             </p>

        //                             <div className="card-actions justify-center">
        //                                 {friend.tags.map((tag, index) => (
        //                                     <div key={index} className="badge bg-[#CBFADB] text-[#244D3F] font-semibold">
        //                                         {tag.toUpperCase()}
        //                                     </div>
        //                                 ))}
        //                             </div>

        //                             <div className="flex justify-center mt-2">
        //                                 <div className={`border rounded-xl px-2 py-1 text-white ${friend.status === "Overdue" ? "bg-red-500" : friend.status === "Almost due" ? "bg-yellow-500" :  "bg-[#244D3F]"}`}>
        //                                     {friend.status}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </Link>
        //                 );
        //             })
        //         }
        //     </div>
        // </div>

        <div className='container mx-auto my-12'>
            <h2 className='font-bold text-2xl'>Your Friends</h2>

            <div className='grid grid-cols-4 gap-6 my-13'>
                {
                    friends.map(friend => {
                        return (
                            <Link
                                to={`/friendDetails/${friend.id}`}
                                key={friend.id}
                                className="card bg-base-200 shadow-sm p-4 hover:shadow-lg transition"
                            >
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
                                            <div
                                                key={index}
                                                className="badge bg-[#CBFADB] text-[#244D3F] font-semibold"
                                            >
                                                {tag.toUpperCase()}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center mt-2">
                                        <div
                                            className={`border rounded-xl px-2 py-1 text-white ${friend.status === "Overdue"
                                                    ? "bg-red-500"
                                                    : friend.status === "Almost due"
                                                        ? "bg-yellow-500"
                                                        : "bg-[#244D3F]"
                                                }`}
                                        >
                                            {friend.status}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;  