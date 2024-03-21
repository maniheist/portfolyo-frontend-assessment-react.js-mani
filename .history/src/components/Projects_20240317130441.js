import React, { useState } from 'react';
import { Link as Link2 } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import Lightbox from 'react-18-image-lightbox';
import { usePortfolioData } from './PortfolioContext';

export default function Projects() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const portfolioData = usePortfolioData();

  const handleClick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  return (
    <>
      {portfolioData.success && (
        <>
          <section className="relative md:py-24 py-16" id="projects">
            <div className="container">
              <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                  My Work & Projects
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
                  {portfolioData.user.about.subTitle}
                </p>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-[30px]">
                {portfolioData.user.projects.map((item, index) => (
                  <div key={item._id} className="relative group overflow-hidden rounded-lg shadow">
                    <img
                      src={item.image.url}
                      alt={item.title}
                      className="w-full h-[200px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-white dark:bg-slate-900 p-4 transition-all duration-500">
                      <Link2
                        to="#!"
                        className="text-black hover:text-amber-500 font-semibold transition-all duration-500"
                      >
                        {item.title}
                      </Link2>
                      <span className="block text-sm text-slate-400">{item.techStack}</span>
                    </div>
                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 transition-all duration-500">
                      <button
                        onClick={() => handleClick(index)}
                        className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
                      >
                        <Unicons.UilCamera width={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {isOpen && (
            <Lightbox
              mainSrc={portfolioData.user.projects[photoIndex].image.url}
              nextSrc={portfolioData.user.projects[(photoIndex + 1) % portfolioData.user.projects.length].image.url}
              prevSrc={portfolioData.user.projects[(photoIndex + portfolioData.user.projects.length - 1) % portfolioData.user.projects.length].image.url}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() => setActiveIndex((photoIndex + portfolioData.user.projects.length - 1) % portfolioData.user.projects.length)}
              onMoveNextRequest={() => setActiveIndex((photoIndex + 1) % portfolioData.user.projects.length)}
            />
          )}
        </>
      )}
    </>
  );
}
