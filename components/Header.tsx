
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-50 p-8 md:p-12 border-b-4 border-teal-500 rounded-t-lg">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">Gaio Bardelle</h1>
                    <h2 className="text-lg md:text-xl font-semibold text-teal-600 mt-1">TECHNICAL SUPPORT AND ITALIAN LANGUAGE LIAISON</h2>
                </div>
                <div className="text-sm text-gray-600 mt-6 md:mt-0 md:text-right space-y-1">
                    <p className="flex items-center justify-start md:justify-end">
                        <i className="fas fa-map-marker-alt w-5 text-center mr-2 text-teal-500"></i>
                        <span>Cape Town, South Africa 8001</span>
                    </p>
                    <p className="flex items-center justify-start md:justify-end">
                        <i className="fas fa-phone w-5 text-center mr-2 text-teal-500"></i>
                        <a href="tel:0713144103" className="hover:text-teal-600">0713144103</a>
                    </p>
                    <p className="flex items-center justify-start md:justify-end">
                        <i className="fas fa-envelope w-5 text-center mr-2 text-teal-500"></i>
                        <a href="mailto:lellowindhover@gmail.com" className="hover:text-teal-600">lellowindhover@gmail.com</a>
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
