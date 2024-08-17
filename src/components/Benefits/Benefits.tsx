import { Check } from 'lucide-react';
import { Heading, HeadingParagraph, HeadingWrapper } from '../Heading/Heading';
import { Checkout } from '../Checkout/Checkout';
import logo from './logo.png';
import Image from 'next/image';
import { CurveShape } from '../CurveShape/CurveShape';

export const Benefits = () => {
  return (
    <section className="py-16 relative mt-12" id="benefits">
      <div className="container relative z-[3]">
        <HeadingWrapper>
          <Heading>Funnel Liner - কি কি পাচ্ছেন?</Heading>
          <HeadingParagraph>
            একটি পারফেক্ট ফানেল ওয়েবসাইট তৈরি করা অনেক ব্যয়বহুল। বিভিন্ন এলিমেন্ট কিনতে লাখ টাকা খরচ হতে পারে। কিন্তু আমাদের কাছে আপনি সকল হাই রেঞ্জএলিমেন্ট পাবেন নাম মাত্র মূল্যে!
          </HeadingParagraph>
        </HeadingWrapper>
        <div className="md:py-4 py-2 px-4 md:px-8 rounded-lg bg-primary-background mt-6 text-sm md:max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-center dot justify-between py-4 text-primary">
              <h1 className='w-36'>Feature</h1>

              <h2 className="mr-4 sm:pl-6">Price</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Image src={logo} alt="Funnel Liner" width={100} height={100} />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">E Commerce Website</h1>

              <h2 className="mr-4 font-semibold">25,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">5 Landing Page</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="p-2 bg-white text-primary rounded-lg text-xs font-semibold w-20 text-center">Unlimited</div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">Inventory Software</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">Web Hosting</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">Cart Flow Plugin</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">Elementor Pro</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">CRM Management</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center dot justify-between pb-4">
              <h1 className="w-36">Bulk SMS Solution</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <h1 className='w-36'>Auto Invoice Making</h1>

              <h2 className="mr-4 font-semibold">15,000 TK</h2>
              <div className="w-20 flex items-center justify-center">
                <div className="p-2 bg-white text-primary rounded-lg">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </li>
            <li className="py-4 relative">
              <div className="absolute top-0 -left-2 w-[calc(100%+8px)] h-full bg-white rounded-lg"></div>
              <div className="flex items-center justify-between z-[1] relative font-medium">
                <h1 className='w-36'>Total</h1>
                <div className="mr-4 font-bold text-red-600">
                  <h2 className="strike line-through thick decoration-2 inline-block text-right">
                    <span className="text-white-gray px-1">1,22,500</span>
                  </h2>{' '}
                  TK
                </div>
                <div className="w-20 flex items-center justify-center text-center">
                  <h1 className="font-bold flex justify-end">3,500 TK</h1>
                </div>
              </div>
            </li>
          </ul>
          <div className="pt-6">
            <Checkout className="md:max-w-2xl" />
          </div>
        </div>
      </div>
      {/* 
      <div className="absolute -bottom-[1px] left-0 right-0 z-[2] text-white">
        <CurveShape />
      </div> */}
      <div className="absolute top-56 left-0 right-0 bottom-0 z-[1] pattern"></div>
    </section>
  );
};
