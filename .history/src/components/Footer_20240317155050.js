import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from './PortfolioContext';
export default function Footer() {
  const portfolioData = usePortfolioData();
  return (
    <>
      {portfolioData.success === true && (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
          <div className="py-[30px] px-0 border-t border-slate-800">
            <div className="container text-center">
              <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                <div className="lg:col-span-3 md:text-start text-center">
                  <Link to="#" className="text-[22px] focus:outline-none">
                    <img
                      src="/images/logo-light.png"
                      className="mx-auto md:me-auto md:ms-0"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                  <p className="mb-0">
                    © {new Date().getFullYear()} Mani Sankar Reddy
                    
                   
                      
                    .
                  </p>
                </div>

              
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
