

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const FriendContext = createContext()


const FriendProvider = ({ children }) => {


    // for call
    const [storedCallFriends, setStoredCallFriends] = useState([])

    const handleCall = (currentFriend) => {
        // console.log("friendId", currentFriend);

        const isCalled = storedCallFriends.find(friend => friend.id === currentFriend.id);

        if (isCalled) {
            toast.error(`The ${currentFriend.name} is already called and it is in timeline section`)
        }
        else {
            setStoredCallFriends([...storedCallFriends, currentFriend]);
            toast.success(`${currentFriend.name} is added to timeline`)
        }
    }

    // for text
    const [storedTextFriends, setStoredTextFriends] = useState([])

    const handleText = (currentFriend) => {
        console.log("text", currentFriend);

        const isTexted = storedTextFriends.find(friend => friend.id === currentFriend.id)

        if (isTexted) {
            toast.error(`The ${currentFriend.name} is already message and it is in timeline section`)
        }
        else {
            setStoredTextFriends([...storedTextFriends, currentFriend]);
            toast.success(`${currentFriend.name} is added to timeline`)
        }
    }

    // for video
    const [storedVideoFriends, setStoredVideoFriends] = useState([])

    const handleVideo = (currentFriend) => {
        console.log("video call",currentFriend);

        const isVideo = storedVideoFriends.find(friend => friend.id === currentFriend.id);

        if (isVideo) {
            toast.error(`The ${currentFriend.name} already video called and it is in timeline section`)
        }
        else {
            setStoredVideoFriends([...storedVideoFriends, currentFriend]);
            toast.success(`${currentFriend.name} is added to timeline`)
        }
    }



    const data = {
        storedCallFriends,
        setStoredCallFriends,
        handleCall,
        storedTextFriends,
        setStoredTextFriends,
        handleText,
        storedVideoFriends,
        setStoredVideoFriends,
        handleVideo
    }


    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider;