import React from 'react';
import { usePortfolioData } from './PortfolioContext';

export default function Experience() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
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
              {portfolioData.user.timeline.map((item, index) => {
                if (!item.enabled) {
                  return null; // Skip rendering if not enabled
                }

                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const date = startDate.getFullYear() + ' - ' + (endDate.getFullYear() % 100);

                return (
                  <div key={item._id} className="relative overflow-hidden">
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md transition-transform transform-gpu hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {item.icon && (
                            <img src={item.icon.url} className="w-12 h-12 rounded-full mr-4" alt={item.company_name} />
                          )}
                          <div>
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.company_name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-amber-500 text-white rounded-full px-4 py-1 mr-2">
                            {item.jobTitle}
                          </div>
                          {item.forEducation && (
                            <span className="text-xs font-medium text-green-500 ml-2">For Education</span>
                          )}
                        </div>
                      </div>
                      <ul className="list-disc ml-8">
                        {item.bulletPoints.map((point, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-amber-500 to-amber-300 rounded-full animate-blob"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
