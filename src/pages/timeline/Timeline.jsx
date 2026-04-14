

import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendProvider';

const Timeline = () => {

    const {handleCall, storedCallFriends} = useContext(FriendContext);
    console.log("handleCall", handleCall);
    console.log("StoredCallFriends", storedCallFriends);


    return (
        <div>
            <div>
                <h2 className='text-5xl'>Timeline</h2>
                
                <div>
                        {
                            storedCallFriends.map(callFriend => {
                                return <div key={callFriend.id} className='border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition my-5'>{callFriend.name}</div>
                            })
                        }
                </div>
            </div>
        </div>
    );
};

export default Timeline;