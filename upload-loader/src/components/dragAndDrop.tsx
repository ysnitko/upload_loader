import Image from 'next/image';

export default function DragAndDrop() {
  return (
    <div>
      <Image src={'/Link.svg'} width={40} height={40} alt="link" />
      <div>
        <label htmlFor="">
          Drag & Drop a file or <input type="file" name="" id="" />
        </label>
      </div>
      <p>JPG, PNG, GIF - Max file size 2MB</p>
    </div>
  );
}
