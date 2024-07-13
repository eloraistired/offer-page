'use client';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import * as React from 'react';
import { Button } from '../ui/button';

interface CountDownProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  date: { start?: Date; end: Date };
  children?: React.ReactNode;
}

const CountDown = React.forwardRef<HTMLDivElement, CountDownProps>(({ className, date, children, ...props }, ref) => {
  const calculateTimeLeft = React.useCallback(() => {
    const difference = +date.end - (date.start ? +date.start : +new Date());

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  }, [date]);
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [date, calculateTimeLeft]);
  return (
    <div ref={ref} className={cn('text-center fixed bottom-0 md:bottom-6 md:right-5 z-10', className)} {...props}>
      <h1 className="font-semibold border py-2 px-3 text-sm bg-secondary-background text-primary rounded-sm">{children}</h1>
      <div className="flex md:inline-flex justify-center overflow-hidden mx-auto rounded-t-lg md:rounded-lg border bg-primary">
        <div className="text-center w-full md:w-[72px] py-2 flex items-center justify-center flex-col bg-white border-r border-dashed">
          <h1 className="text-sm pb-0.5 text-muted-foreground">দিন</h1>
          <h2 className="font-bold" suppressHydrationWarning>
            {timeLeft.days}
          </h2>
        </div>
        <div className="text-center w-full md:w-[72px] py-2 flex items-center justify-center flex-col bg-white border-r border-dashed">
          <h1 className="text-sm pb-0.5 text-muted-foreground">ঘণ্টা</h1>
          <h2 className="font-bold" suppressHydrationWarning>
            {timeLeft.hours}
          </h2>
        </div>
        <div className="text-center w-full md:w-[72px] py-2 flex items-center justify-center flex-col bg-white border-r border-dashed">
          <h1 className="text-sm pb-0.5 text-muted-foreground">মিনিট</h1>
          <h2 className="font-bold" suppressHydrationWarning>
            {timeLeft.minutes}
          </h2>
        </div>
        <div className="text-center w-full md:w-[76px] py-2 flex items-center justify-center flex-col bg-white rounded-r-lg">
          <h1 className="text-sm pb-0.5 text-muted-foreground">সেকেন্ড</h1>
          <h2 className="font-bold" suppressHydrationWarning>
            {timeLeft.seconds}
          </h2>
        </div>
        <div className="w-12 min-w-12">
          <Button className='text-white w-full h-full p-0'>
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
});
CountDown.displayName = 'CountDown';

export { CountDown };
