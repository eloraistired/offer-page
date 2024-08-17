'use client';
import { ArrowRight } from 'lucide-react';
import * as React from 'react';
import { useState } from 'react';

export const Footer = () => {
  const [isSubbed, setIsSubbed] = useState(false);
  const [validMail, setValidMail] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)) setValidMail(true);
    else setValidMail(false);
  };

  return (
    <footer className="md:px-10 px-5 contact relative bg-white z-10 md:pt-14">
      <div className="absolute bg-pale -left-[12rem] pointer-events-none -z-10 top-0 w-1/2 h-16 -skew-x-[60deg]"></div>
      <div className="grid md:grid-cols-2 md:gap-28">
        <div>
          <h1 className="max-w-sm md:text-xl uppercase">Subscribe to our newsletter</h1>
          {isSubbed ? (
            <div className="bg-primary-background text-primary font-semibold uppercase text-sm rounded mt-8 px-2 md:px-4 py-6">Thanks for subscribing to our newsletter</div>
          ) : (
            <form>
              <div className="flex md:mt-8 items-center relative">
                <div className="w-full">
                  <input
                    onChange={handleEmail}
                    className="w-full py-4 bg-transparent placeholder:font-mono border-b-2 transition-colors focus:border-red border-red/20 outline-none"
                    placeholder="Email"
                    type="email"
                    name="email"
                  />
                </div>
                <button className={`transition-transform absolute right-0 ${validMail ? 'scale-100' : 'scale-0 pointer-events-none duration-500'}`}>
                  <div className="w-5 h-5">
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="flex flex-col justify-between max-md:mt-8">
          <div>
            <h1 className="text-xl text-justify [text-align-last:justify] uppercase">House No 17, Road No 8/A, Nikunja 1, Dhaka - 1229,
            Bangladesh</h1>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold flex-wrap max-md:mt-8 gap-4">
            <a href="mailto:suppport@funnelliner.com">suppport@funnelliner.com</a>
            <ul className="flex items-center gap-5 max-md:justify-between max-md:w-full">
              <li>
                <a href="#">Twitter/X</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between py-6 border-t border-red/20 text-xs sm:text-sm font-mono">
        <div className="flex gap-3">
          <h2>Dhaka, Bangladesh</h2>
          <h2 suppressHydrationWarning>{new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: false, hour: 'numeric', minute: 'numeric' })} - Local Time</h2>
        </div>
        <h2>©2024</h2>
      </div>
    </footer>
  );
};
