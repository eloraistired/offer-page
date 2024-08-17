import * as React from 'react';
import { cn } from '@/lib/utils';

const HeadingWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn('text-center flex flex-col justify-center items-center', className)} {...props} />;
});
HeadingWrapper.displayName = 'HeadingWrapper';

const Heading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => {
  return <h1 ref={ref} className={cn('text-xl md:text-3xl font-semibold ornament relative', className)} {...props} />;
});
Heading.displayName = 'Heading';

const SubHeading = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => {
  return <h2 ref={ref} className={cn('text-xl font-bold', className)} {...props} />;
});
SubHeading.displayName = 'SubHeading';

const HeadingParagraph = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => {
  return <p ref={ref} className={cn('max-w-2xl text-muted-foreground text-sm pt-2', className)} {...props} />;
});
HeadingParagraph.displayName = 'HeadingParagraph';

export { HeadingWrapper, Heading, SubHeading, HeadingParagraph };
