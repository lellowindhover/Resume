
import React from 'react';
import { WorkExperience } from '../types';

interface WorkExperienceItemProps {
    experience: WorkExperience;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ experience }) => {
    return (
        <div>
            <div className="flex justify-between items-baseline">
                <h4 className="text-md font-bold text-gray-800">{experience.role}</h4>
                <p className="text-sm text-gray-500 font-medium">{experience.period}</p>
            </div>
            <p className="text-md font-semibold text-teal-600">{experience.company} - <span className="text-gray-600 font-normal italic">{experience.location}</span></p>
            <ul className="mt-2 list-disc list-inside space-y-1">
                {experience.responsibilities.map((resp, index) => (
                    <li key={index} className="text-sm text-gray-700">{resp}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperienceItem;
