import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function AddBanner() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="relative py-20 w-full overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${portfolioData.user.youtube[0].embedId}?autoplay=1&loop=1&controls=0&mute=1&playlist=${portfolioData.user.youtube[0].embedId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 z-0"
              title={portfolioData.user.youtube[0].title}
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
          </div>

          <div className="container relative z-10 flex flex-col justify-center items-center">
            <div className="text-center z-10">
              <h3 className="text-3xl md:text-4xl text-white font-bold mb-4">
                I Am Available For Freelancer Projects.
              </h3>
              <p className="text-white text-lg md:text-xl mb-6">
                {portfolioData.user.about.subTitle}
              </p>
              <Link
                to=""
                className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white rounded-md py-3 px-6 inline-block"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
