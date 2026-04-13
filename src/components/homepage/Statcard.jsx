

import React from 'react';

const Statcard = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <h2 className="text-3xl font-bold text-[#244D3F]">8</h2>
                        <p className="mt-2 text-gray-500">Total Friends</p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
                        <p className="mt-2 text-gray-500">On Track</p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
                        <p className="mt-2 text-gray-500">Need Attention</p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
                        <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
                        <p className="mt-2 text-gray-500">Interactions This Month</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Statcard;