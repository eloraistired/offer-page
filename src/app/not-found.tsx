import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <section className="px-4 md:px-8 text-center">
        <figure className="md:max-w-sm mx-auto">
          <img src="/error.png" alt="" />
        </figure>
        <div className="py-4 space-y-2">
          <h1 className="text-xl font-semibold">404 Not Found!</h1>
          <p className="text-sm max-w-lg mx-auto">Oops! It seems like the page you are looking for does not exist.</p>
        </div>
        <div className='md:flex items-center justify-center'>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-4 max-md:w-full">
              <div className="w-4">
                <ArrowLeft />
              </div>
              Go Back To Home
            </Button>
          </Link>
        </div>
        <h1 className="pt-6 fixed bottom-6 left-0 px-4 md:px-8 text-sm w-full">Funnelliner® 2024</h1>
      </section>
    </>
  );
};
export default Page;
