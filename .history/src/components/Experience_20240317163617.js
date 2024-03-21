import React from 'react';
import { usePortfolioData } from './PortfolioContext';

export default function Experience() {
  const portfolioData = usePortfolioData();

  if (!portfolioData.success) {
    return null;
  }

  const { timeline } = portfolioData.user;
  const educationExperiences = timeline.filter((item) => item.forEducation);
  const workExperiences = timeline.filter((item) => !item.forEducation);

  const renderExperience = (experience) => (
    <div key={experience._id} className="relative overflow-hidden">
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md transition-transform transform-gpu hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {experience.icon && (
              <img src={experience.icon.url} className="w-12 h-12 rounded-full mr-4" alt={experience.company_name} />
            )}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{experience.company_name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{experience.startDate} - {experience.endDate}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-amber-500 text-white rounded-full px-4 py-1 mr-2">
              {experience.jobTitle}
            </div>
          </div>
        </div>
        <ul className="list-disc ml-8">
          {experience.bulletPoints.map((point, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">{point}</li>
          ))}
        </ul>
      </div>
      <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-300 rounded-full animate-blob"></div>
    </div>
  );

  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="experience">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-gray-800 dark:text-gray-100">
            Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
            {portfolioData.user.about.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8 gap-8">
          {workExperiences.map(renderExperience)}
        </div>
      </div>
    </section>
  );
}
