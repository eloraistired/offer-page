import { Banner } from '@/components/Banner/Banner';
import { Benefits } from '@/components/Benefits/Benefits';
import { Checkout } from '@/components/Checkout/Checkout';
import { CountDown } from '@/components/CountDown/CountDown';
import { DemoVideo } from '@/components/DemoVideo/DemoVideo';
import { Feature } from '@/components/Feature/Feature';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { MarqueeText, MarqueeTextWrapper } from '@/components/MarqueeText/MarqueeText';
import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { Team } from '@/components/Team/Team';
import { UserReview } from '@/components/UserReview/UserReview';
import { WhyJoinUs } from '@/components/WhyJoinUs/WhyJoinUs';
import { Heart } from 'lucide-react';

export default function Home() {
  return (
    <>
      <MarqueeTextWrapper>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
          <Heart fill="red" stroke="transparent" className="w-5 h-5 ml-2" />
        </MarqueeText>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
          <Heart fill="red" stroke="transparent" className="w-5 h-5 ml-2" />
        </MarqueeText>
        <MarqueeText>
          বিজনেস অটোমেশন সল্যুশন যার রেগুলার প্রাইস <strong>৫,০০০ টাকা</strong>, কিন্তু অফার হিসেবে পাবেন মাত্র <strong>৩৫০০ টাকায়</strong>। সর্বোচ্চ সুযোগটি হাতছাড়া করে আফসোস করবেন না, প্লিজ!
          <Heart fill="red" stroke="transparent" className="w-5 h-5 ml-2" />
        </MarqueeText>
      </MarqueeTextWrapper>

      <CountDown date={{ end: new Date('2025-01-01') }}>Funnel Liner এর অফার প্রাইস এভেইল্যাবল থাকছে আর মাত্র</CountDown>

      <Header></Header>
      <main>
        <Banner></Banner>
        <Feature></Feature>
        <WhyJoinUs></WhyJoinUs>
        <ProductPrice></ProductPrice>
        <DemoVideo></DemoVideo>
        <UserReview></UserReview>
        <Benefits></Benefits>
        <Team></Team>
        <Footer></Footer>
      </main>
    </>
  );
}
