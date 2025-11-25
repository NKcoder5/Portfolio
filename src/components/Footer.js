import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent mb-2">
                        Nandha Kumar S
                    </h3>
                    <p className="text-gray-500 text-sm">
                        Building the future, one line of code at a time.
                    </p>
                </div>

                <div className="text-gray-400 text-sm font-medium">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
