import {
  Globe,
  GlobeLock,
  HardDrive,
  MonitorSmartphone,
  NotebookPen,
  Paintbrush2,
  ScrollText,
  ServerCrash,
  ShieldCheck,
  ShoppingBasket,
  SquareDashedMousePointer,
  Target,
  Truck,
  Users,
} from 'lucide-react';
import { Heading, HeadingParagraph, HeadingWrapper } from '../Heading/Heading';

const FeatureItem = ({ title, paragraph, Icon }: { title: string; paragraph: string; Icon: React.ElementType }) => {
  return (
    <div className="p-6 border border-black/5 flex flex-col transition-colors hover:bg-accent items-start">
      <div className="inline-flex justify-center items-center bg-primary-background text-primary border p-4 rounded-lg">
        <div className="w-5 h-5 flex items-center justify-center">
          <Icon />
        </div>
      </div>
      <h1 className="font-medium pt-4">{title}</h1>
    </div>
  );
};

export const Feature = () => {
  return (
    <section className="container py-20">
      <HeadingWrapper>
        <Heading>আমাদের Funnel Liner - এর ফিচারসমূহ</Heading>
        <HeadingParagraph>অনলাইন বিজনেস শুরু করার এবং অটোমেশন করে স্কেল আপ করার সকল সল্যুশন একজায়গায় করে দিচ্ছে বাংলাদেশের প্রথম Most Powerful Automation Solution Funnel Liner</HeadingParagraph>
      </HeadingWrapper>

      <div className="grid grid-cols-2 lg:grid-cols-4 pt-8">
        <FeatureItem
          title="সিম্পল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={SquareDashedMousePointer}
        ></FeatureItem>
        <FeatureItem
          title="সুপার ফাস্ট CDN হোস্টিং & স্মুথ পেজ লোডিং।"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={ServerCrash}
        ></FeatureItem>
        <FeatureItem
          title="কাস্টম ডোমেইন (নিজের বিজনেসের ব্র্যান্ডিং বাড়ান)"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={Globe}
        ></FeatureItem>
        <FeatureItem
          title="ইনভেন্টরি ম্যানেজমেন্ট"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={ShoppingBasket}
        ></FeatureItem>
        <FeatureItem title="সেল টার্গেট সিস্টেম" paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।" Icon={Target}></FeatureItem>
        <FeatureItem
          title="সুপারফাস্ট কুরিয়ার ইন্টিগ্রেশন"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={Truck}
        ></FeatureItem>
        <FeatureItem
          title="সিম্পল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={SquareDashedMousePointer}
        ></FeatureItem>
        <FeatureItem
          title="অর্ডার,সেলস & ডেলিভারি রিপোর্ট ড্যাশবোর্ড"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={NotebookPen}
        ></FeatureItem>
        <FeatureItem
          title="অটোমেটিক SSL সার্টিফিকেট"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={GlobeLock}
        ></FeatureItem>
        <FeatureItem
          title="সিম্পল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={SquareDashedMousePointer}
        ></FeatureItem>
        <FeatureItem
          title="ফুল মোবাইল রেসপন্সিভ ওয়েবসাইট"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={MonitorSmartphone}
        ></FeatureItem>
        <FeatureItem title="প্রাইভেসি প্রটেকশন" paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।" Icon={ShieldCheck}></FeatureItem>
        <FeatureItem title="অটো ইনভয়েস মেকিং" paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।" Icon={ScrollText}></FeatureItem>
        <FeatureItem
          title="ওয়েবসাইট কাস্টমাইজেশন"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={Paintbrush2}
        ></FeatureItem>
        <FeatureItem
          title="লিডস & সেলস ডাটা রিপোর্টিং ড্যাশবোর্ড"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={Users}
        ></FeatureItem>
        <FeatureItem
          title="নো ডাটা লস ( AWS Que উইথ অটো স্ক্যালিং)"
          paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
          Icon={HardDrive}
        ></FeatureItem>
      </div>

      <div className="pt-6">
        <h1 className="text-lg font-semibold text-center flex items-center gap-1 justify-center">
          কাস্টম অ্যাডঅনস <span className="text-primary bg-primary-background px-2 py-1 text-base rounded-lg">পেইড</span>
        </h1>
        <div className="grid grid-cols-2 lg:max-w-lg place-content-center pt-6 mx-auto">
          <FeatureItem
            title="সিম্পল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার"
            paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
            Icon={SquareDashedMousePointer}
          ></FeatureItem>
          <FeatureItem
            title="সুপার ফাস্ট CDN হোস্টিং & স্মুথ পেজ লোডিং।"
            paragraph="নিজের ওয়েবসাইট নিজেই তৈরি করুন খুব সহজেই আমাদের পাওয়াফুল ড্রাগ অ্যান্ড ড্রপ ওয়েবসাইট বিল্ডার ব্যবহার করে।"
            Icon={ServerCrash}
          ></FeatureItem>
        </div>
      </div>
    </section>
  );
};
