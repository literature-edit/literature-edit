#!/usr/bin/env node
const cloudinary = require('cloudinary').v2;

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: 'jyuijmcn',
  api_key: '673514694991357',
  api_secret: 'eg24NGAA01qI960RlKXPJJ6q9ek',
  secure: true
});

// 2. Upload an image
const sampleImageUrl = 'https://res.cloudinary.com/demo/image/upload/v1/sample.jpg';

async function runOnboarding() {
  try {
    console.log("Uploading sample image...");
    const uploadResult = await cloudinary.uploader.upload(sampleImageUrl, {
      public_id: 'cloudinary_onboarding_sample',
      overwrite: true
    });

    console.log("\n--- Upload Successful ---");
    console.log(`Secure URL: ${uploadResult.secure_url}`);
    console.log(`Public ID: ${uploadResult.public_id}`);

    // 3. Get image details
    console.log("\nFetching image details...");
    const details = await cloudinary.api.resource(uploadResult.public_id);
    console.log("\n--- Image Details ---");
    console.log(`Width: ${details.width}px`);
    console.log(`Height: ${details.height}px`);
    console.log(`Format: ${details.format}`);
    console.log(`File Size: ${details.bytes} bytes`);

    // 4. Transform the image
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      // f_auto: Automatically selects the most optimized format supported by the client browser (e.g., AVIF, WebP, etc.)
      fetch_format: 'auto',
      // q_auto: Automatically adjusts image quality to compress file size while maintaining visual quality
      quality: 'auto',
      secure: true
    });

    console.log("\nDone! Click link below to see optimized version of the image. Check the size and the format.");
    console.log(transformedUrl);

  } catch (error) {
    console.error("An error occurred during Cloudinary onboarding:", error);
    process.exit(1);
  }
}

runOnboarding();
