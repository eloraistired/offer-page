import { Button } from '../ui/button';

export const Banner = () => {
  return (
    <div className="pt-6 pb-8">
      <div className="container">
        <h1 className="text-center text-xl md:text-2xl xl:text-3xl lg:max-w-4xl mx-auto">
          <span className="funnel">Funnel Liner</span> কি? এবং Funnel Liner কিভাবে আপনার বিজনেস কে র‍্যাপিডলি গ্রো করবে !
        </h1>

        <div className="flex items-center justify-center pt-6">
          <div className="w-full h-[360px] md:h-[480px] max-w-4xl overflow-hidden rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/Hn31fDf-MqA?si=zgPR9KOUgnj5SAtN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="relative pt-6">
          <div className="absolute left-0 right-0 top-[calc(50%+10px)] h-[2px] dot"></div>
          <div className="flex items-center gap-2 lg:max-w-lg mx-auto">
            <Button className="w-1/2 relative overflow-hidden flex px-0 p-[1px]" size="lg" asChild>
              <a href="#price">
                <span className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
                  <span className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.pink.500)_0%,_theme(colors.white)_50%,_theme(colors.pink.500)_100%)] animate-spin"></span>
                </span>
                <span className="animate-border bg-gradient-to-r from-primary via-primary to-pink-500 rounded uppercase w-full h-full relative z-[1] flex items-center justify-center">
                  প্রাইস সম্পর্কে জানতে চাই
                </span>
              </a>
            </Button>
            <Button className="w-1/2 bg-white text-primary border hover:bg-white relative overflow-hidden flex px-0 p-[1px]" size="lg" asChild>
              <a href="#demo">
                <span className="absolute inset-0 polygon(0% 0%, 0% 100%, 9% 100%, 7% 7%, 92% 7%, 90% 96%, 7% 94%, 6% 100%, 100% 100%, 100% 0%)">
                  <span className="absolute -inset-[1000%] bg-[conic-gradient(from_90deg_at_50%_50%,_theme(colors.violet.500)_0%,_theme(colors.white)_50%,_theme(colors.violet.500)_100%)] animate-spin"></span>
                </span>
                <span className="animate-border bg-white rounded uppercase w-full h-full relative z-[1] flex items-center justify-center">ডেমো দেখতে চাই</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
