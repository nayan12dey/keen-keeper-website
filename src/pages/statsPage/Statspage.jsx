

import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';




const data = [
    { name: 'Call', value: 400, fill: '#244D3F' },
    { name: 'Text', value: 300, fill: '#7E35E1' },
    { name: 'Video', value: 300, fill: '#37A163' },
];

const Statspage = () => {
    return (
        <div>
            <div className='container mx-auto max-w-7xl p-20'>
                <h2 className='text-5xl font-bold mb-10'>Friendship Analytics</h2>

                <div className='border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition my-5'>
                    <p className='text-lg font-semibold text-[#244D3F] mb-5'>By Interaction Type</p>
                    <div className='flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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
                        </PieChart>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Statspage;