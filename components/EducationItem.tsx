
import React from 'react';
import { Education } from '../types';

interface EducationItemProps {
    education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => {
    return (
        <div className="text-sm">
            <div className="flex justify-between items-baseline">
                <h4 className="font-bold text-gray-800">{education.degree}</h4>
                <p className="text-gray-500 text-xs font-semibold">{education.period}</p>
            </div>
            <p className="font-semibold text-teal-600">{education.institution}</p>
            <p className="italic text-gray-500">{education.location}</p>
            {education.details.length > 0 && (
                 <ul className="mt-1 list-disc list-inside space-y-1 pl-1">
                    {education.details.map((detail, index) => (
                        <li key={index} className="text-xs text-gray-600">{detail}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EducationItem;
