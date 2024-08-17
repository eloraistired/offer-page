import { Header } from '@/components/Header/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Password } from './Password';

const Page = () => {
  return (
    <>
      <Header className="justify-center pt-10" />
      <section className="px-4 md:px-8 mt-4">
        <div className="md:max-w-lg border rounded-lg mx-auto p-6">
          <form className={'grid items-start gap-4'}>
            <div className="grid gap-2">
              <Label htmlFor="shop-id">Shop ID</Label>
              <Input id="shop-id" placeholder="123456" />
            </div>
            <div className="grid gap-2">
              <Password title="Password" id="password" />
            </div>
            <div className="grid gap-2">
              <Password title="Confirm Password" id="confirm-password" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <h1 className="pt-6 fixed bottom-6 left-0 px-4 md:px-8 text-sm w-full text-center">Funnelliner® 2024</h1>
      </section>
    </>
  );
};
export default Page;
