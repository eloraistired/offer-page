import { Checkout } from '../Checkout/Checkout';
import { Heading, HeadingParagraph, HeadingWrapper } from '../Heading/Heading';

export const ProductPrice = () => {
  return (
    <section className="container pt-16 pb-6" id="price">
      <HeadingWrapper>
        <Heading>Funnel Liner - এর প্রাইস</Heading>
        <HeadingParagraph>অনলাইন বিজনেস শুরু করার এবং অটোমেশন করে স্কেল আপ করার সকল সল্যুশন একজায়গায় করে দিচ্ছে বাংলাদেশের প্রথম Most Powerful Automation Solution Funnel Liner</HeadingParagraph>
      </HeadingWrapper>

      <div className="flex items-center justify-center pt-6">
        <div className="w-full h-[270px] md:h-[480px] max-w-4xl overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/Hnx9AhElKLw?si=zgPR9KOUgnj5SAtN"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="pt-6">
        <Checkout />
      </div>
    </section>
  );
};
