import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function GetInTouch() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="bg-gradient-to-r from-blue-200 to-blue-400 dark:bg-slate-800 py-16 md:py-24" id="contact">
          <div className="container">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">Get In Touch!</h3>
              <p className="text-black text-lg md:text-xl">{portfolioData.user.about.subTitle}</p>
              <p className="text-grey-500 text-base md:text-lg mb-8">{portfolioData.user.about.quote}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow-md p-6">
                <form>
                  <input
                    name="name"
                    type="text"
                    className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-800 dark:bg-slate-900 dark:text-white rounded mb-4"
                    placeholder="Name"
                  />
                  <input
                    name="email"
                    type="email"
                    className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-800 dark:bg-slate-900 dark:text-white rounded mb-4"
                    placeholder="Email"
                  />
                  <input
                    name="subject"
                    type="text"
                    className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-800 dark:bg-slate-900 dark:text-white rounded mb-4"
                    placeholder="Subject"
                  />
                  <textarea
                    name="message"
                    className="form-textarea w-full py-2 px-3 border border-gray-300 dark:border-gray-800 dark:bg-slate-900 dark:text-white rounded mb-4"
                    placeholder="Message"
                  ></textarea>
                  <button
                    type="submit"
                    className="btn bg-amber-500 hover:bg-amber-600 text-white rounded-md h-11 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-md shadow-md p-6">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <Unicons.UilPhone className="text-3xl text-amber-500" />
                    <p className="ml-4">{portfolioData.user.about.phoneNumber}</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <Unicons.UilEnvelope className="text-3xl text-amber-500" />
                    <p className="ml-4">
                      <Link to={`mailto:${portfolioData.user.email}`}>{portfolioData.user.email}</Link>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Unicons.UilMapMarker className="text-3xl text-amber-500" />
                    <p className="ml-4">{portfolioData.user.about.address}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link to="/services" className="btn bg-amber-500 hover:bg-amber-600 text-white rounded-md py-2 px-6">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
