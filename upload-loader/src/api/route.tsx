import express from 'express';
import multer from 'multer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Store files in an 'uploads' directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  }),
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = await prisma.file.create({
      data: {
        name: req.file.originalname,
        type: req.file.mimetype,
        path: req.file.path,
        size: req.file?.size,
      },
    });
    res
      .status(201)
      .json({ message: 'File uploaded successfully', fileId: file.id });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error uploading file', error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
