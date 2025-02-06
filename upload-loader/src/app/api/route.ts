import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ message: 'no file provided' }, { status: 400 });
  }

  const fileName = request.headers.get('file-name') as string;

  if (!fileName) {
    return NextResponse.json(
      { message: 'file name is missing' },
      { status: 400 }
    );
  }

  const decodedFileName = decodeURIComponent(fileName);
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), 'public/uploads', decodedFileName);
  console.log(filePath);

  try {
    await fs.promises.writeFile(filePath, buffer);
    return NextResponse.json({ message: 'file uploaded' });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Failed file upload' },
      { status: 500 }
    );
  }
}
