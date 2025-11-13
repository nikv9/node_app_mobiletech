import { Photo } from "../models/photo_model.js";

export const postPhoto = async (req, res) => {
  const { name, description, mime_type, media_metadata } = req.body;

  try {
    const photo = await Photo.create({
      name,
      description,
      mime_type,
      media_metadata,
    });

    return res.json(photo).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePhoto = async (req, res) => {
  const photoId = req.params.photoId;

  try {
    const photo = await Photo.findById(photoId);
    if (!photo) {
      return res.status(404).json("Photo not found");
    }
    return res.json(photo).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    if (!photos) {
      return res.status(404).json("Photos not found");
    }
    return res.json(photos).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const updatePhoto = async (req, res) => {
  const { name, description, mime_type, media_metadata } = req.body;
  const photoId = req.params.photoId;

  try {
    const photo = await Photo.findByIdAndUpdate(
      photoId,
      {
        name,
        description,
        mime_type,
        media_metadata,
      },
      { new: true }
    );

    return res
      .json({ photo, msg: "Photo is updated successfully!" })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};

export const deletePhoto = async (req, res) => {
  const photoId = req.params.photoId;

  try {
    const photo = await Photo.findByIdAndDelete(photoId);
    return res.json("photo deleted.").status(200);
  } catch (error) {
    console.log(error);
  }
};
