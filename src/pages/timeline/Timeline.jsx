

import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';

const Timeline = () => {

    const { timeline, formatDate } = useContext(FriendContext);

    console.log("timeline", timeline);


    return (
        <div>
            <div className='container mx-auto max-w-7xl p-20'>
                <h2 className='text-5xl font-bold mb-10'>Timeline</h2>

                <div>
                    {
                        timeline.map((friend) => {
                            return <div key={friend.id} className='border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition my-5'>
                                <div className='flex gap-3'>
                                    <img src={friend.image} alt="" className='w-10 h-10' />
                                    <div className='flex flex-col items-start'>
                                        <p className='text-gray-500 text-lg '><span className='text-[#244D3F] font-semibold'>{friend.type}</span> with {friend.name}</p>
                                        <p className='text-sm font-semibold text-gray-500'>{formatDate(friend.date)}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;