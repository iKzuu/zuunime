"use client"

import { useState } from "react";

const Synopsis = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!text) {
        return (
            <div className="md:w-fit h-auto">
                <p className="text-justify md:text-xl text-sm">
                    No synopsis available...
                </p>
            </div>
        );
    }

    const maxLength = 350; // mengatur panjang teks sinopsis

    if (text.length <= maxLength) {
        return (
            <div className="md:w-fit h-auto">
                <p className="text-justify md:text-xl text-sm">
                    {text}
                </p>
            </div>
        );
    }

    return (
        <div className="md:w-fit h-auto">
            <p className="text-justify md:text-xl text-sm">
                {isExpanded ? text : `${text.slice(0, maxLength)}...`}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-color-blueform hover:text-color-primary font-medium cursor-pointer"
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </button>
            </p>
        </div>
    );

}

export default Synopsis;