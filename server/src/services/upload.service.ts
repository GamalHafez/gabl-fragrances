import { AppError } from '@/utils/response.js';
import { uploadToCloudinary } from '@/utils/index.js';

export const uploadService = {
  async uploadProductImage(file?: Express.Multer.File) {
    if (!file) {
      throw new AppError(400, 'Image file is required');
    }

    const result = await uploadToCloudinary(file);

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  },
};
