
import React from 'react';
import Banner from '../../components/homepage/Banner';
import Statcard from '../../components/homepage/Statcard';
import AllFriends from '../../components/homepage/AllFriends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Statcard></Statcard>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;