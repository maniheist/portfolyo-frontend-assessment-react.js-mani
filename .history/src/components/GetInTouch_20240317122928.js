import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';

export default function GetInTouch() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="bg-gray-50 dark:bg-slate-800 py-16" id="contact">
          <div className="container">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">{portfolioData.user.about.subTitle}</p>
              <p className="text-gray-600 dark:text-gray-400">{portfolioData.user.about.quote}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow-md p-6">
                <form>
                  <div className="mb-4">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-amber-500 dark:focus:border-amber-500"
                      placeholder="Name"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-amber-500 dark:focus:border-amber-500"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="subject"
                      id="subject"
                      className="form-input w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-amber-500 dark:focus:border-amber-500"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      name="message"
                      id="message"
                      className="form-textarea w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:border-amber-500 dark:focus:border-amber-500"
                      rows={6}
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-green-500 hover:bg-green-600 text-white rounded-md h-10 w-full transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-md shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Unicons.UilPhone className="text-2xl text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-lg">Phone</h5>
                    <Link
                      to={`tel:${portfolioData.user.about.phoneNumber}`}
                      className="text-gray-600 dark:text-gray-400 text-sm"
                    >
                      {portfolioData.user.about.phoneNumber}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <Unicons.UilEnvelope className="text-2xl text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-lg">Email</h5>
                    <Link
                      to={`mailto:${portfolioData.user.email}`}
                      className="text-gray-600 dark:text-gray-400 text-sm"
                    >
                      {portfolioData.user.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4">
                    <Unicons.UilMapMarker className="text-2xl text-orange-500 dark:text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-lg">Location</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{portfolioData.user.about.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
