

import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-7xl font-extrabold text-[#244D3F]">404</h1>

            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Oops! Page not found
            </h2>


            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-lg shadow"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;