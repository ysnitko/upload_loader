'use client';
import Image from 'next/image';
import { useActionState } from 'react';

export default function DragAndDrop() {
  const [state, submitAction] = useActionState(handleFileChange, {
    data: null,
    error: null,
  });

  const handleFileChange = async (prevstate: any, formData: Promise<void>) => {
    const file = formData.get('file');

    try {
      const response = await fetch('/api/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      // Обработка успешного результата
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };
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
              name="file"
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
