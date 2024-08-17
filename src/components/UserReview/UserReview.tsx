import { Heading, HeadingParagraph, HeadingWrapper } from '../Heading/Heading';

export const UserReview = () => {
  return (
    <div className="pt-16 container">
      <HeadingWrapper>
        <Heading>Funnel Liner ব্যবহার করে আমাদের ইউজার দের সফলতার গল্প</Heading>
        <HeadingParagraph>অনলাইন বিজনেস শুরু করার এবং অটোমেশন করে স্কেল আপ করার সকল সল্যুশন একজায়গায় করে দিচ্ছে বাংলাদেশের প্রথম Most Powerful Automation Solution Funnel Liner</HeadingParagraph>
      </HeadingWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="w-full h-[210px] md:h-[370px] max-w-4xl overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/pj_HOzuJLLo?si=_EmPIAvTRIlhpOh6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[210px] md:h-[370px] max-w-4xl overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/IvDSCpGoFE0?si=_EmPIAvTRIlhpOh6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[210px] md:h-[370px] max-w-4xl overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/nCwqAcmJX3g?si=_EmPIAvTRIlhpOh6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[210px] md:h-[370px] max-w-4xl overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/a5IcK13kISU?si=_EmPIAvTRIlhpOh6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
