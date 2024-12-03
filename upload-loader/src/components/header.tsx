import Image from 'next/image';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b-[1px] border-b-clr_4 px-16 py-3">
      <Image src="/logo.svg" alt="logo" width={150} height={150} />
      <Button className="h-10 w-10 p-2">
        <Image src={'/Moon_fill.svg'} width={40} height={40} alt="dark" />
      </Button>
    </header>
  );
}
