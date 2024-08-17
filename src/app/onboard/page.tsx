import { Header } from '@/components/Header/Header';
import { Effect } from './Effect';
import { Button } from '@/components/ui/button';
import { Asterisk, User } from 'lucide-react';

const Page = () => {
  return (
    <>
      <Header className="bg-transparent backdrop-blur-none md:fixed w-full" showDashboard />
      <Effect />
      <section className="md:py-6 py-14 container bg-[center_32%] bg-no-repeat bg-[size:1000px_165px]" style={{ backgroundImage: 'url(/effect.png)' }}>
        <div className="text-center pt-5">
          <h1 className="text-4xl font-semibold bg-gradient-to-r from-violet-600 to-red-500 inline-block bg-clip-text text-fil [-webkit-text-fill-color:transparent] [-webkit-background-clip:text] py-1 ornament gif relative">
            Congratulation!
          </h1>
          <p className="text-lg mt-2 md:max-w-xl mx-auto">
            <span className="funnel revert">আপনার পেমেন্ট সফল হয়েছে।</span> আমাদের সাথে আপনার বিসনেস কে অটোমেশন এর সাহায্যে এগিয়ে নেওয়ার নতুন এই যাত্রায় আপনাকে স্বাগতম।
          </p>

          <div className="grid gap-4 md:grid-cols-2 md:max-w-xl mx-auto pt-6 font-semibold">
            <Button variant="outline" className="border-[#d9dbec] bg-[#f0f0f4] text-[#0017ef] flex items-center gap-2">
              <div className="w-5 h-5">
                <svg viewBox="0 0 48 48">
                  <path fill="currentColor" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </div>
              প্রাইভেট ফেসবুক গ্রুপে জয়েন করুন
            </Button>
            <Button variant="outline" className="border-[#ddd9ec] bg-[#f1f0f4] text-[#5000ef] flex items-center gap-2">
              <div className="w-5 h-5">
                <svg viewBox="0 0 48 48">
                  <path fill="currentColor" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  ></path>
                  <path fill="currentColor" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path>
                  <path
                    fill="currentColor"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  ></path>
                </svg>
              </div>
              প্রাইভেট টেলিগ্রাম গ্রুপে জয়েন করুন
            </Button>
            <Button variant="outline" className="border-red-100 bg-red-50 text-red-600 flex items-center gap-2">
              <div className="w-5 h-5">
                <svg viewBox="0 0 48 48">
                  <path
                    fill="currentColor"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </div>
              ফানেল লাইনারের টিউটোরিয়াল ভিডিও
            </Button>
            <Button variant="outline" className="border-violet-100 bg-violet-50 text-violet-600 flex items-center gap-2">
              <div className="w-5">
                <svg viewBox="0 0 49 45" fill="none">
                  <path
                    stroke='#fff'
                    strokeWidth="1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.7605 8.28095L0.421875 0.328125H48.4219L45.0705 8.28095H3.7605ZM7.71418 16.7686L4.1687 9.12238L23.4275 9.0498L19.833 16.7686H7.71418ZM33.7591 17.5582L33.7663 17.54H8.09521L10.7861 23.3427V26.3656H16.7811V23.3482H20.2304L30.4223 23.3318L33.7591 17.5582ZM10.7935 27.1348H16.7885V36.0311H10.7935V27.1348ZM7.63794 44.0751L10.7933 40.6947V36.8662H16.7883V40.6947L19.9437 44.0751H7.63794Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              আপনার অ্যাকাউন্টে লগিন করুন
            </Button>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 md:max-w-xl mx-auto text-center text-sm inline-block">
            নিচের ভিডিওটি অবশ্যই দেখুন <Asterisk className="text-red-600 inline w-4 h-4" />
          </p>
        </div>
        <div className="flex items-center justify-center pt-2">
          <div className="p-1 w-full h-[360px] md:h-[480px] max-w-4xl overflow-hidden rounded-xl relative">
            <span className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.violet.500)_0%,_theme(colors.red.500)_50%,_theme(colors.violet.500)_100%)] animate-spin [font-family:cursive]"></span>
            <div className="overflow-hidden rounded-xl h-full w-full relative z-10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/de2U9YWbY74?si=zl49bSqH0u-lW-q0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
