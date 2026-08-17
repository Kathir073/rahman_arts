require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImages = async () => {
  const imagesDir = path.join(__dirname, 'public', 'images');
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
    console.log(`Found ${files.length} images to upload.`);
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const publicId = file.split('.')[0];
      try {
        await cloudinary.uploader.upload(filePath, { public_id: publicId });
        console.log(`Uploaded image: ${publicId}`);
      } catch (error) {
        console.error(`Error uploading image ${publicId}:`, error);
      }
    }
  } else {
    console.log('No public/images directory found.');
  }
};

const uploadVideos = async () => {
  const videosDir = path.join(__dirname, 'public', 'videos');
  if (fs.existsSync(videosDir)) {
    const files = fs.readdirSync(videosDir).filter(file => file.endsWith('.mp4'));
    console.log(`Found ${files.length} videos to upload.`);
    for (const file of files) {
      const filePath = path.join(videosDir, file);
      const publicId = file.split('.')[0];
      try {
        await cloudinary.uploader.upload(filePath, { resource_type: 'video', public_id: publicId });
        console.log(`Uploaded video: ${publicId}`);
      } catch (error) {
        console.error(`Error uploading video ${publicId}:`, error);
      }
    }
  } else {
    console.log('No public/videos directory found.');
  }
};

const run = async () => {
  await uploadImages();
  await uploadVideos();
  console.log('Upload complete!');
};

run();
