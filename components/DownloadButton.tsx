
import React from 'react';

const DownloadButton: React.FC = () => {
    const handleDownload = () => {
        window.print();
    };

    return (
        <button
            onClick={handleDownload}
            className="print-hidden fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105 z-50 flex items-center"
            aria-label="Download Resume"
            title="Download Resume"
        >
            <i className="fas fa-download mr-2"></i>
            <span>Download</span>
        </button>
    );
};

export default DownloadButton;
