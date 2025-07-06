
import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 pb-2 border-b-2 border-gray-200">{title}</h3>
            {children}
        </section>
    );
};

export default Section;
