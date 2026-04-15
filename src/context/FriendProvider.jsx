

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext()


const FriendProvider = ({ children }) => {

    // for handle call,text and video 
    const [timeline, setTimeline] = useState([]);

    const handleCall = (currentFriend) => {
        addTimeline(currentFriend, "call")
    }

    const handleText = (currentFriend) => {
        addTimeline(currentFriend, "text")
    }

    const handleVideo = (currentFriend) => {
        addTimeline(currentFriend, "video");
    }


    const addTimeline = (currentFriend, type) => {

        const currentFriendData = {
            name: currentFriend.name,
            type,
            date: currentFriend.next_due_date
        }

        setTimeline([...timeline, currentFriendData])                                
    }



    const data = {
        timeline,
        handleCall, 
        handleVideo,
        handleText

    }


    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;