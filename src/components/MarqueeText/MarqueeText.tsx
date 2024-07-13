import { cn } from '@/lib/utils';
import * as React from 'react';

const MarqueeTextWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('overflow-hidden flex items-center py-2 bg-primary-background', className)} {...props} />;
});
MarqueeTextWrapper.displayName = 'MarqueeTextWrapper';

const MarqueeText = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('animate-marquee whitespace-nowrap text-primary pr-3 text-sm', className)} {...props} />;
});
MarqueeText.displayName = 'MarqueeText';

export { MarqueeTextWrapper, MarqueeText };
