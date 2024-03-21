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
                Work Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                {portfolioData.user.about.subTitle}
              </p>
            </div>

            <div className="grid grid-cols-1 mt-8 gap-8">
              {portfolioData.user.timeline.map((item, index) => {
                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const date = startDate.getFullYear() + ' - ' + (endDate.getFullYear() % 100);

                return (
                  <div key={item._id} className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden ${index !== 0 && 'mt-8'}`}>
                    <div className="p-6 md:grid md:grid-cols-3 md:gap-6">
                      <div className="md:col-span-1 flex items-center justify-center">
                        {item?.icon?.url && (
                          <img src={item?.icon?.url} className="rounded-full h-20 w-20" alt={item.company_name} />
                        )}
                      </div>
                      <div className="mt-4 md:mt-0 md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <h5 className="font-semibold text-lg mb-2">{item.company_name}</h5>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{date}</p>
                          </div>
                          <div className="flex flex-col">
                            <h5 className="font-semibold text-lg mb-2">{item.jobTitle}</h5>
                            <ul className="list-disc text-gray-600 dark:text-gray-300 text-sm">
                              {item.bulletPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
