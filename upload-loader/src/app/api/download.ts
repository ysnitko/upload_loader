import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  //   const formData = await request.formData();
  //   const file = formData.get('file') as File;

  //   if (!file) {
  //     return NextResponse.json({ message: 'no file provided' }, { status: 400 });
  //   }

  const fileName = request.headers.get('file-name') as string;

  if (!fileName) {
    return NextResponse.json({ message: 'file is missing' }, { status: 400 });
  }

  const decodedFileName = decodeURIComponent(fileName);

  const filePath = path.join(process.cwd(), 'public/uploads', decodedFileName);
  console.log(filePath);
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: 'Файл не найден' }, { status: 404 });
  }

  const fileStream = fs.readFileSync(filePath);

  return new NextResponse(fileStream, {
    headers: {
      'Content-Disposition': `attachment; filename="${decodedFileName}"`,
      'Content-Type': 'application/octet-stream',
    },
  });
}
