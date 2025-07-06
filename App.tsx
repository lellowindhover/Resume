
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import WorkExperienceItem from './components/WorkExperienceItem';
import EducationItem from './components/EducationItem';
import SkillBar from './components/SkillBar';
import DownloadButton from './components/DownloadButton';
import { 
    PROFESSIONAL_SUMMARY,
    CORE_SKILLS,
    WORK_HISTORY,
    EDUCATION_HISTORY,
    SOFTWARE_SKILLS,
    CERTIFICATIONS,
    LANGUAGES
} from './constants';
import { Language } from './types';

const App: React.FC = () => {
    return (
        <div className="min-h-screen p-4 sm:p-8 md:p-12">
            <DownloadButton />
            <main id="resume" className="print-a4 mx-auto max-w-5xl bg-white shadow-2xl rounded-lg font-sans">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 p-8 md:p-12">
                    {/* Left Column */}
                    <div className="md:col-span-2">
                        <Section title="Professional Summary">
                            <p className="text-gray-700 text-sm leading-relaxed">{PROFESSIONAL_SUMMARY}</p>
                        </Section>
                        
                        <Section title="Work History">
                            <div className="space-y-6">
                                {WORK_HISTORY.map((job, index) => (
                                    <WorkExperienceItem key={index} experience={job} />
                                ))}
                            </div>
                        </Section>
                    </div>

                    {/* Right Column */}
                    <div className="mt-8 md:mt-0">
                        <Section title="Skills">
                            <ul className="space-y-1">
                                {CORE_SKILLS.map((skill, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="text-teal-500 mr-2">&#10003;</span>
                                        <span className="text-gray-700 text-sm">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Education">
                            <div className="space-y-4">
                                {EDUCATION_HISTORY.map((edu, index) => (
                                    <EducationItem key={index} education={edu} />
                                ))}
                            </div>
                        </Section>

                        <Section title="Software">
                             <div className="space-y-3">
                                {SOFTWARE_SKILLS.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} />
                                ))}
                            </div>
                        </Section>

                        <Section title="Certifications">
                            {CERTIFICATIONS.map((cert, index) => (
                                <div key={index} className="flex justify-between items-center text-sm mb-1">
                                    <p className="text-gray-700 font-medium">{cert.name}</p>
                                    <p className="text-gray-500">{cert.date}</p>
                                </div>
                            ))}
                        </Section>
                         <Section title="Languages">
                            {LANGUAGES.map((lang: Language, index: number) => (
                                <div key={index} className="flex justify-between items-center text-sm mb-1">
                                    <p className="text-gray-700 font-medium">{lang.name}</p>
                                    <p className="text-gray-500">{lang.proficiency}</p>
                                </div>
                            ))}
                        </Section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
