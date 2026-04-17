

import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendProvider';






const Statspage = () => {

    const { timeline } = useContext(FriendContext);
    console.log(timeline);

    const interactionTypeCount = {
        Call: 0,
        Text: 0,
        Video: 0
    }

    // console.log(interactionTypeCount);

    timeline.forEach(timeline => {
        console.log(timeline)
        interactionTypeCount[timeline.type]++;
    })

    console.log(interactionTypeCount);


    const data = [
        { name: 'Call', value: interactionTypeCount.Call, fill: '#244D3F' },
        { name: 'Text', value: interactionTypeCount.Text, fill: '#7E35E1' },
        { name: 'Video', value: interactionTypeCount.Video, fill: '#37A163' },
    ];

    const existData = timeline.length > 0
    console.log(existData);


    return (
        <div>
            <div className='container mx-auto max-w-7xl p-20'>
                <h2 className='text-5xl font-bold mb-10'>Friendship Analytics</h2>

                <div className='border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition my-5'>
                    <p className='text-lg font-semibold text-[#244D3F] mb-5'>By Interaction Type</p>
                    <div className='flex justify-center'>
                        {existData ? (<PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                        </PieChart>) : (<div className="p-10 text-center mt-5">
                                <p className="text-2xl font-semibold text-gray-700">No Interaction Data Yet</p>
                                <p className="mt-2 text-gray-500">
                                    Start adding calls, texts, or videos to see analytics.
                                </p>
                            </div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Statspage;  