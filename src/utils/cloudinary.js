import {v2 as cloudinary} from "cloudinary"
import fs from "fs";


cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

/////////////////////////
// Uploads an image file
/////////////////////////
const uploadOnCloudinary = async (localFilePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions

    try {
      // Upload the image
      if(!localFilePath)    return null;

      const result = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto"
      });
      fs.unlinkSync(localFilePath)
      
      return result;
    } catch (error) {
      fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
      return null;
    }
};


export default uploadOnCloudinary;