import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { usePortfolioData } from './PortfolioContext';

const settings = {
  lazyLoad: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Clients() {
  const portfolioData = usePortfolioData();

  return (
    <>
      {portfolioData.success === true && (
        <section className="relative py-24 bg-gray-50 dark:bg-slate-800" id="testimonials">
          <div className="container">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-6 text-2xl md:text-3xl font-semibold">Client's Review</h3>
              <p className="text-slate-400 max-w-xl mx-auto text-[15px]">{portfolioData.user.about.subTitle}</p>
            </div>
            <Slider {...settings}>
              {portfolioData.user.testimonials.map((item) => (
                <div key={item._id} className="px-4">
                  <div className="customer-testimonial">
                    <div className="content relative rounded shadow-md bg-white dark:bg-slate-900">
                      <i className="mdi mdi-format-quote-open text-amber-500 text-4xl absolute top-0 left-0 mt-2 ml-2"></i>
                      <p className="text-slate-400 text-[15px] py-4 px-6">{item.review}</p>
                      <ul className="list-none mb-0 text-amber-400 flex justify-center pb-4">
                        {[...Array(5)].map((_, i) => (
                          <li key={i} className="inline mx-1">
                            <i className="mdi mdi-star text-xl"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center mt-5">
                      <img
                        src={item.image.url}
                        className="h-14 w-14 rounded-full shadow-md mx-auto mb-1"
                        alt={item.name}
                      />
                      <Link
                        to="#"
                        className="text-base font-medium hover:text-amber-500 transition duration-500 ease-in-out"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-400 text-sm block">{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      )}
    </>
  );
}
