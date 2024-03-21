import React from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import { usePortfolioData } from './PortfolioContext';

export default function Services() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="relative md:py-24 py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900" id="service">
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 text-3xl md:text-4xl font-bold leading-tight text-gray-800 dark:text-gray-100">
                What Do I Offer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                {portfolioData.user.about.subTitle}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {portfolioData.user.services.map((item, index) => {
                return (
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:shadow-xl" key={index} style={{ marginBottom: '20px' }}>
                    <img src={item.image.url} alt={item.name} className="w-full h-48 object-cover object-center" />
                    <div className="p-6">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{item.name}</h4>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2">{item.desc}</p>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">Charge: ${item.charge}</p>
                      <Link to="#" className="text-amber-500 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-500 flex items-center">
                        Read More <Unicons.UilArrowRight width={16} className="ml-1" />
                      </Link>
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
