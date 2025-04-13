import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const REGION = "eu-west-3"; // Change to your AWS region
// const BUCKET_NAME = "your-s3-bucket"; // Change to your S3 bucket name
// const IMAGE_KEY = "path-to-your-image.jpg"; // Change to your image path


// Initialize AWS S3 Client
const s3Client = new S3Client({
  forcePathStyle: true,
  region: REGION,
  endpoint: `https://zvfkbuluvhocefebecrg.supabase.co/storage/v1/s3`,
  credentials: {
    accessKeyId: "6733c685eea5d1da52cc5a0debf15919",
    secretAccessKey: "0f191f5bad99fb2430db01a320c0c22d6e9a8a1a6191976c36da32b279039d0a",
  },
});

/**
 * Get a signed URL for an S3 image.
 * @param {string} bucketName - The S3 bucket name.
 * @param {string} imageKey - The key/path of the image in S3.
 * @param {number} expiresIn - URL expiration time in seconds (default: 3600).
 * @returns {Promise<string>} - The signed URL.
 */
export async function getSignedImageUrl(
  bucketName: string,
  key: string,
  expiresIn: number = 3600
): Promise<string> {
  try {
    const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
    return await getSignedUrl(s3Client, command, { expiresIn });
  } catch (error) {
    console.error(
      `Error while retrieving pre signed url from AWS for object ${key} and bucket ${bucketName}. Error details: ${JSON.stringify(error,)}`)
    throw error
  }
}

// export function parseS3Url(
//   url: string
// ):  {
//   bucket 
//   return {bucket, key}
// }