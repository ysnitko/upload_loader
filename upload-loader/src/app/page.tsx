'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [statusUpload, setStatusUpload] = useState<boolean>(false);

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

    if (response.status === 200) {
      setStatusUpload(true);
    }

    const result = await response.json();
    console.log(result.message);
    setMessage(result.message);
  };

  return (
    <main className="flex justify-center items-center -translate-x-1 translate-y-1/2">
      <div className="h-[300px] w-[500px] bg-clr_5 rounded-sm p-2">
        <div className="h-full w-full rounded-sm  border-[1px] border-dashed overflow-hidden">
          {statusUpload ? (
            <Image
              src={`/uploads/${file?.name}`}
              width={500}
              height={300}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'none',
              }}
              alt="uploaded-foto"
            />
          ) : (
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
          )}
        </div>
        {statusUpload && (
          <div className="flex gap-3 mt-8 justify-center">
            <button
              type="button"
              className="flex gap-2 bg-clr_1 taxt-[10px] text-clr_5 rounded-lg justify-center items-center px-3 py-2"
            >
              <Image src={'Link.svg'} width={15} height={15} alt="share" />
              <p>Share</p>
            </button>
            <button
              type="button"
              className="flex gap-2 bg-clr_1 taxt-[10px] text-clr_5 rounded-lg justify-center items-center px-3 py-2"
            >
              <Image src={'download.svg'} width={15} height={15} alt="share" />
              <p>Download</p>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
