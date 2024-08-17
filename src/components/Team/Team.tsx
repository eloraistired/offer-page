import Image from 'next/image';
import teamImage from './team.png';
import { Heart } from 'lucide-react';

export const Team = () => {
  return (
    <section className="container pb-12">
      <div className="flex items-center justify-center gap-0.5">
        <h1 className="text-xl font-semibold text-center">পুরো Funnel liner টিম আপনাকে স্বাগত জানানোর জন্যে অপেক্ষা করছে!</h1>
        <Heart fill="red" stroke="transparent" className="w-6 h-6" />
      </div>

      <div className="mt-4 overflow-hidden rounded-md">
        <Image src={teamImage} alt="Funnel Liner Team" />
      </div>
    </section>
  );
};
