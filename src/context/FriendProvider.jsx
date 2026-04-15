

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext()


const FriendProvider = ({ children }) => {

    // for handle call,text and video 
    const [timeline, setTimeline] = useState([]);

    const handleCall = (currentFriend) => {
        addTimeline(currentFriend, "Call")
    }

    const handleText = (currentFriend) => {
        addTimeline(currentFriend, "Text")
    }

    const handleVideo = (currentFriend) => {
        addTimeline(currentFriend, "Video");
    }


    const addTimeline = (currentFriend, type) => {

        const currentFriendData = {
            name: currentFriend.name,
            type,
            date: currentFriend.next_due_date,
            image: type === "Call" ? "/assets/call.png" : type === "Text" ? "/assets/text.png" : "/assets/video.png"
        }

        setTimeline([...timeline, currentFriendData])

        toast.success(`${type} with ${currentFriend.name} added to timeline!`)
    }


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



    const data = {
        timeline,
        handleCall,
        handleVideo,
        handleText,
        formatDate

    }


    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;