import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function AboutUs() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="relative md:py-24 py-16" id="about">
          <div className="container">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
              <div className="lg:col-span-5 lg:px-8">
                <div className="relative">
                  <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                  <img
                    src={portfolioData.user.about.avatar.url}
                    className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800 rotate-anim"
                    style={{
                      borderRadius: '50%',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      animation: 'rotate 5s linear infinite',
                    }}
                    alt=""
                  />
                  <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                    <h6 className="font-semibold">{portfolioData.user.about.title}</h6>
                    <span className="text-2xl font-medium text-amber-500 mb-0">
                      <span className="counter-value font-bold" data-target="7">
                        <CountUp
                          start={7}
                          className="counter-value"
                          end={portfolioData.user.about.exp_year}
                          duration={2.75}
                        />
                      </span>
                      +
                    </span>
                    <span className="text-sm text-slate-400">Years Experience</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="lg:ms-5">
                  <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                    I'm a Passionate {portfolioData.user.about.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                    {portfolioData.user.about.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                    {portfolioData.user.about.subTitle}
                  </p>

                  <div className="mt-6">
                    <Link
                      to="#project"
                      className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2"
                    >
                      Explore My Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Skills</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{portfolioData.user.about.subTitle}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {portfolioData.user.skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((item, index) => (
              <div
                className="flex group shadow-lg dark:shadow-xl hover:shadow-xl transition-shadow duration-300 items-center p-3 rounded-lg bg-white dark:bg-slate-900"
                key={index}
              >
                <div className="flex items-center justify-center h-12 w-12 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white rounded-full me-5 shadow-lg transition-all duration-300">
                  <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-8 h-8 rounded-full"
                    style={{ filter: 'brightness(0.8)' }}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="mb-1 text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">
                    Sequence: {item.sequence}, Percentage: {item.percentage}%
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
