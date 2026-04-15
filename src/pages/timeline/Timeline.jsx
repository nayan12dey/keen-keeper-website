

import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';

const Timeline = () => {

    const { timeline } = useContext(FriendContext);
    
    console.log("timeline", timeline);


    return (
        <div>
            <div className='container mx-auto max-w-7xl p-20'>
                <h2 className='text-5xl font-bold'>Timeline</h2>

                <div>
                    {
                        timeline.map(callFriend => {
                            return <div key={callFriend.id} className='border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition my-5'>{callFriend.name}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;