import Image from 'next/image';

export default function DownloadBtn({ file }: { file: File }) {
  const handleClickDownload = async () => {
    const response = await fetch(`/api/download?filename=${file.name}`);
    return response.url;
  };

  return (
    <button
      type="button"
      className="flex gap-2 bg-clr_1 taxt-[10px] text-clr_5 rounded-lg justify-center items-center px-3 py-2"
      onClick={handleClickDownload}
    >
      <Image src={'download.svg'} width={15} height={15} alt="share" />
      <p>Download</p>
    </button>
  );
}
