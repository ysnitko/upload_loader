'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function DragAndDrop() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handlerFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('Select a file');
      return;
    }

    const formData = new FormData();

    formData.append('file', file);

    const response = await fetch('api', {
      method: 'POST',
      body: formData,
      headers: {
        'file-name': encodeURIComponent(file.name),
      },
    });

    const result = await response.json();
    console.log(result.message);
    setMessage(result.message);
  };

  return (
    <form
      className="flex flex-col justify-center items-center size-full gap-3"
      onSubmit={handlerSubmit}
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
              onChange={handlerFileInput}
            />
          </label>
        </p>
      </div>

      <p>JPG, PNG, GIF - Max file size 2MB</p>

      <button type="submit">Upload</button>
    </form>
  );
}
