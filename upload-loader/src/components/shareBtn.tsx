import Image from 'next/image';

export default function ShareBtn({ file }: { file: File }) {
  return (
    <button
      type="button"
      className="flex gap-2 bg-clr_1 taxt-[10px] text-clr_5 rounded-lg justify-center items-center px-3 py-2"
    >
      <Image src={'Link.svg'} width={15} height={15} alt="share" />
      <p>Share</p>
    </button>
  );
}
