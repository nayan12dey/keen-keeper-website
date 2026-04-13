

import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";




const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-white p-10">
            <aside>
                <p className="font-bold text-5xl">
                    Keen<span className='font-semibold'>Keeper</span>
                </p>
                <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </aside>
            <nav>
                <p className='text-xl'>Social Links</p>
                <div className="grid grid-flow-col gap-4">
                    <a className='bg-white rounded-full text-black text-2xl p-3'>
                        <TbBrandInstagramFilled />
                    </a>
                    <a className='bg-white rounded-full text-black text-2xl p-3'>
                        <FaFacebookSquare />
                    </a>
                    <a className='bg-white rounded-full text-black text-2xl p-3'>

                        <RiTwitterXFill />
                    </a>
                </div>
                
            </nav>
            
        <div className="w-full border border-[#3e5d53]"></div>

            <div className='flex flex-col gap-4 md:flex-row justify-between items-center'>
                <div>
                    <p className='text-gray-400'>© {new Date().getFullYear()} KeenKeeper. All rights reserved</p>
                </div>

                <div className='text-gray-500 flex gap-4 text-xs sm:text-base items-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;