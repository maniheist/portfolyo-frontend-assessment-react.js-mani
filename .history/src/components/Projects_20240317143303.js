import React, { useState } from 'react';
import { Link as Link2 } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
import { usePortfolioData } from './PortfolioContext';

let images = [];

export default function Projects() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const portfolioData = usePortfolioData();

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(!isOpen);
  };

  if (portfolioData.success) {
    images = portfolioData?.user?.projects?.map((item) => {
      return item.image.url;
    });
  }

  return (
    <>
      {portfolioData.success === true && (
        <>
          <section className="relative md:py-24 py-16" id="project">
            <div className="container">
              <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
                  My Work & Projects
                </h3>

                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm md:text-base">
                  {portfolioData.user.about.subTitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                {portfolioData.user.projects.map((item, index) => {
                  return (
                    <div
                      key={item._id}
                      className="relative group overflow-hidden rounded-lg shadow"
                    >
                      <img src={item.image.url} alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-white dark:bg-slate-900 p-4 transition-all duration-500">
                        <Link2
                          to="#!"
                        className="text-black hover:text-amber-500 font-semibold transition-all duration-500"
                        >
                          {item.title}
                        </Link2>
                        <span className="block text-sm text-slate-400">
                          {item.techStack}
                        </span>
                      </div>

                      <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                        <Link2
                          to="#"
                          onClick={() => handleCLick(index)}
                          className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
                        >
                          <Unicons.UilCamera width={16} />
                        </Link2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </>
      )}
    </>
  );
}
