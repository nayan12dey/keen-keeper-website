

import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/FriendProvider';

const Timeline = () => {

    const { timeline, formatDate } = useContext(FriendContext);

    console.log("timeline", timeline);

    // for filter
    const [filter, setFilter] = useState("All");

    const filteredTimeline = filter === "All" ? timeline : timeline.filter(timeline => timeline.type === filter)




    return (
        <div>
            <div className='container mx-auto max-w-7xl p-20'>
                <h2 className='text-5xl font-bold mb-5'>Timeline</h2>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Filter timeline by {filter} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setFilter("All")}><a>All</a></li>
                        <li onClick={() => setFilter("Call")}><a>Call</a></li>
                        <li onClick={() => setFilter("Text")}><a>Text</a></li>
                        <li onClick={() => setFilter("Video")}><a>Video</a></li>
                    </ul>
                </div>
            <div>
                    {
                        timeline.length === 0 ?
                            (<div className="p-10 text-center border-2 border-dashed border-gray-400 rounded-xl mt-5">
                                <p className="text-2xl font-semibold text-gray-700">No Timeline Yet</p>
                                <p className="mt-2 text-gray-500">
                                    Your activity will appear here once you start.
                                </p>
                            </div>)
                            : (filteredTimeline.map((friend, idx) => {
                                return <div key={idx} className='border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition my-5'>
                                    <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4'>
                                        <img src={friend.image} alt="" className='w-10 h-10' />
                                        <div className='flex flex-col items-start'>
                                            <p className='text-gray-500 text-lg '><span className='text-[#244D3F] font-semibold'>{friend.type}</span> with {friend.name}</p>
                                            <p className='text-sm font-semibold text-gray-500'>{formatDate(friend.date)}</p>
                                        </div>
                                    </div>
                                </div>
                            }))
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;