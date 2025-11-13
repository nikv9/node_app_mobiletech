import express from "express";
import {
  deletePhoto,
  getAllPhotos,
  getSinglePhoto,
  postPhoto,
  updatePhoto,
} from "../controllers/photo_ctrl.js";

const router = express.Router();

router.post("/photos", postPhoto);
router.get("/photos/:photoId", getSinglePhoto);
router.get("/photos", getAllPhotos);
router.put("/photos/:photoId", updatePhoto);
router.delete("/photos/:photoId", deletePhoto);

export default router;
