'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Bkash, Nagad } from './logos';
import { ArrowRight } from 'lucide-react';

export function Checkout({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="w-full">
          {!children ? (
            <Button className={cn('w-full flex items-center gap-1 justify-center md:max-w-md mx-auto', className)}>
              রেজিস্ট্রেশন করুন
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            children
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex items-center justify-center pb-4 mb-4 dot">
              <div className="relative flex items-center justify-center gap-6 font-semibold text-sm">
                <div className={cn('bg-primary-background rounded-full w-8 h-8 text-primary border border-dashed flex items-center justify-center', step === 1 && 'bg-primary text-white')}>1</div>
                <div className={cn('bg-primary-background rounded-full w-8 h-8 text-primary border border-dashed flex items-center justify-center', step === 2 && 'bg-primary text-white')}>2</div>
                <div className="absolute top-1/2 left-0 right-0 w-full h-[2px] dot -z-[1]"></div>
              </div>
            </div>
            <DialogTitle>{step === 1 ? 'Personal Info' : 'Select Payment Method'}</DialogTitle>
            <DialogDescription>তাহলে এখনই শুরু করা যাক আপনার ড্রীম প্রজেক্ট বানানোর প্রসেস।</DialogDescription>
          </DialogHeader>
          <ProfileForm setStep={setStep} step={step} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {!children ? (
          <Button className={cn('w-full flex items-center gap-1 justify-center md:max-w-md mx-auto', className)}>
            রেজিস্ট্রেশন করুন
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          children
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <div className="flex items-center justify-center pb-4 mb-4 dot">
            <div className="relative flex items-center justify-center gap-6 font-semibold text-sm">
              <div className={cn('bg-primary-background rounded-full w-8 h-8 text-primary border border-dashed flex items-center justify-center', step === 1 && 'bg-primary text-white')}>1</div>
              <div className={cn('bg-primary-background rounded-full w-8 h-8 text-primary border border-dashed flex items-center justify-center', step === 2 && 'bg-primary text-white')}>2</div>
              <div className="absolute top-1/2 left-0 right-0 w-full h-[2px] dot -z-[1]"></div>
            </div>
          </div>
          <DrawerTitle>{step === 1 ? 'Personal' : 'Select Payment Method'}</DrawerTitle>
          <DrawerDescription>তাহলে এখনই শুরু করা যাক আপনার ড্রীম প্রজেক্ট বানানোর প্রসেস।</DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" step={step} setStep={setStep} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, step, setStep }: { className?: string; step: number; setStep: React.Dispatch<React.SetStateAction<number>> } & React.ComponentProps<'form'>) {
  return (
    <form className={cn('grid items-start gap-4', className)} onSubmit={e => e.preventDefault()}>
      {step === 1 ? (
        <>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Jack Smith" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="user@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="tel" id="phone" placeholder="+880 123 456 7890" />
          </div>
          <Button type="submit" onClick={() => setStep(2)}>
            Go To Next Step
          </Button>
        </>
      ) : (
        <>
          <ToggleGroup type="single" className="flex items-center gap-2">
            <ToggleGroupItem
              variant="outline"
              value="bkash"
              className="w-1/2 flex items-center gap-1 data-[state=on]:border-[#D12053] data-[state=on]:text-[#D12053] data-[state=on]:bg-[#f6eff1]"
              aria-label="Bkash"
            >
              <div className="w-5 h-5">
                <Bkash />
              </div>
              Bkash
            </ToggleGroupItem>
            <ToggleGroupItem
              variant="outline"
              value="nagad"
              className="w-1/2 flex items-center gap-1 data-[state=on]:border-[#ED1C24] data-[state=on]:text-[#ED1C24] data-[state=on]:bg-[#f5e8e8]"
              aria-label="Nagad"
            >
              <div className="w-5 h-5">
                <Nagad />
              </div>
              Nagad
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="pt-2 text-sm flex items-center justify-between">
            <h1>Package Amount</h1>

            <div className="ml-auto mr-4 font-bold">
              <h2 className="strike line-through thick decoration-2 inline-block text-red-600">
                <span className="text-white-gray px-1">5,000</span>
              </h2>{' '}
              3,500 TK
            </div>
          </div>
          <div className="pt-2 dot !bg-top">
            <h1 className="text-xs">
              By pressing “Pay Now” you agree to the{' '}
              <a href="#">
                <span className="font-semibold">Terms and Conditions</span>
              </a>
            </h1>
          </div>
          <Button type="submit" onClick={() => setStep(2)}>
            Pay Now
          </Button>
          <Button variant="outline" asChild className="w-full cursor-pointer">
            <div onClick={() => setStep(1)}>Go Back</div>
          </Button>
        </>
      )}
    </form>
  );
}
