import Image from 'next/image';

export default function DragAndDrop() {
  return (
    <form
      action=""
      className="flex flex-col justify-center items-center size-full gap-3"
    >
      <Image src={'/exit.svg'} width={40} height={40} alt="link" />
      <div>
        <p>
          Drag & Drop a file or &nbsp;
          <label
            htmlFor="browse"
            className="pointer text-clr_1 hover:text-red-400"
          >
            browse files
            <input
              type="file"
              name=""
              id="browse"
              className="opacity-0 absolute -z-[1]"
              accept=".jpg, .png, .jpeg"
            />
          </label>
        </p>
      </div>

      <p>JPG, PNG, GIF - Max file size 2MB</p>
    </form>
  );
}
