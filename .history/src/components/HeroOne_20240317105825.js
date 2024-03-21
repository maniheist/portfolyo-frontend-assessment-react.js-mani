import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import { usePortfolioData } from './PortfolioContext';

export default function HeroOne() {
  const portfolioData = usePortfolioData();
  return (
    <>
      {portfolioData.success === true && (
        <>
          <section className="relative pt-24 pb-16 personal-wrapper overflow-hidden bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200" id="home">
            <div className="absolute inset-0" id="overlay"></div>
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8">
                <div>
                  <h1 className="font-bold text-4xl lg:text-6xl text-yellow-900 leading-tight mb-4">
                    Hey! I'm <br />
                    <TypeAnimation
                      sequence={[
                        portfolioData.user.about.name,
                        1000,
                        portfolioData.user.about.title,
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="typewrite text-yellow-700"
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="text-gray-800 text-lg max-w-md mb-6">
                    {portfolioData.user.about.description}
                  </p>
                  <div className="flex">
                    <Link
  to=""
  className="btn bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 text-white rounded-md"
>
  Hire Me
</Link>
<Link
  to=""
  className="btn bg-green-500/10 hover:bg-green-500 border-green-500/10 hover:border-green-500 text-green-500 hover:text-white rounded-md ms-1"
>
  Download CV
</Link>

                  </div>
                </div>
                <div className="relative">
                  <img src="/images/hero/2.png" alt="" className="w-full h-auto" />
                  <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-gray-900">
                      <span className="counter-value font-bold">
                        <CountUp
                          start={7}
                          className="counter-value"
                          end={portfolioData.user.about.some_total}
                          duration={2.75}
                        />
                      </span>
                      +
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Projects Completed
                    </p>
                  </div>
                  <div className="absolute bottom-8 right-8 bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold text-gray-900">
                      {portfolioData.user.about.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {portfolioData.user.about.exp_year}+ Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="absolute block w-full h-auto bottom-4 z-10 left-0">
              <Link to="#about">
                <i className="mdi mdi-arrow-down absolute top-0 left-0 right-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-900 h-12 w-12 mx-auto shadow-md"></i>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
