import { CountDown } from '@/components/CountDown/CountDown';
import { MarqueeText, MarqueeTextWrapper } from '@/components/MarqueeText/MarqueeText';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <MarqueeTextWrapper>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
        </MarqueeText>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
        </MarqueeText>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
        </MarqueeText>
      </MarqueeTextWrapper>

      <CountDown date={{ end: new Date('2025-01-01') }}>Funnel Liner এর অফার প্রাইস এভেইল্যাবল থাকছে আর মাত্র</CountDown>
    </>
  );
}
