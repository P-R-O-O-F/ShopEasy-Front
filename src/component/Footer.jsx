import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <img src="rename.png" alt="Logo" className="w-32 h-32 mb-4 md:mb-0" />
                <p className="text-center md:text-left">Terms and Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;
