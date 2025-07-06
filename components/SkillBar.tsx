
import React from 'react';
import { SoftwareSkill, SkillLevel } from '../types';

interface SkillBarProps {
    skill: SoftwareSkill;
}

const levelWidthMap: Record<SkillLevel, string> = {
    [SkillLevel.Intermediate]: 'w-2/4',
    [SkillLevel.UpperIntermediate]: 'w-3/4',
    [SkillLevel.Advanced]: 'w-11/12',
};

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
    const widthClass = levelWidthMap[skill.level];

    return (
        <div className="text-sm">
            <div className="flex justify-between items-center mb-1">
                <p className="font-medium text-gray-700">{skill.name}</p>
                <p className="text-xs text-gray-500">{skill.level}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`bg-teal-500 h-2 rounded-full ${widthClass}`}></div>
            </div>
        </div>
    );
};

export default SkillBar;
