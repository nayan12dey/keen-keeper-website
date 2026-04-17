

import React from 'react';
import { GoPlus } from "react-icons/go";


const Banner = () => {
    return (
        <div>
            <div className='space-y-5 my-20'>
                <h2 className='text-5xl text-center font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <div className='flex justify-center'>
                    <button className='btn bg-[#244D3F] text-white'><GoPlus className='text-xl' />
                        Add a Friend</button>
                </div>

              

                
            </div>


          
        </div>
    );
};

export default Banner;