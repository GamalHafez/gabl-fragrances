import { UploadApiResponse } from 'cloudinary';
import cloudinary from '@/config/cloudinary.js';

export const uploadToCloudinary = (
  file: Express.Multer.File,
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'gabal/products',
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (!result) {
          reject(new Error('Cloudinary upload failed'));
          return;
        }

        resolve(result);
      },
    );

    uploadStream.end(file.buffer);
  });
};
