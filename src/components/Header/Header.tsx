import Image from 'next/image';
import logo from './logo.png';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Header = ({ showDashboard, className }: { showDashboard?: boolean; className?: string }) => {
  return (
    <header className={cn('flex items-center justify-between py-4 px-4 md:px-8 sticky top-0 bg-white/95 backdrop-blur z-30', className)}>
      <div className="flex items-center gap-2">
        <Link href="/">
          <h1 className="w-[100px]">
            <Image src={logo} alt="Funnel Liner" width={100} height={100} />
          </h1>
        </Link>
        <div className="text-xs px-2.5 py-0.5 rounded font-semibold bg-secondary-background text-primary">v1.3</div>
      </div>
      {showDashboard && (
        <Button
          variant="outline"
          size="sm"
          className="text-primary border-violet-100 text-sm hover:bg-violet-50 hover:text-violet-600 focus:ring-2 ring-violet-600/50 bg-violet-50 px-6 transition-shadow"
        >
          ড্যসবোর্ডে যান
        </Button>
      )}
    </header>
  );
};
