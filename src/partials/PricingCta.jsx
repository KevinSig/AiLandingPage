import React from 'react';
import { Link } from 'react-router-dom';

function PricingCta() {
  return (
    <section className="relative">

      {/* Gray background */}
      <div className="absolute inset-0 top-auto bg-slate-100 pointer-events-none -z-10 h-1/2" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-12 md:mt-16">

          <div className="relative flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg p-6">
            <div className="absolute top-0 left-0 ml-6 -mt-4">
              <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">For Young Startups</div>
            </div>
            <div className="h4 font-asap-display text-center lg:text-left mb-4 lg:mb-0">Launched a business making less than $100K in revenue?</div>
            <div className="p-3 rounded bg-slate-50">
              <Link className="btn-sm text-white bg-blue-600 hover:bg-blue-700 group" to="#0">
                Contact Us <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default PricingCta;
