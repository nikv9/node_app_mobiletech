import express from "express";
import "./config/db.js";
import connectDB from "./config/db.js";
import photoRoute from "./routes/photo_route.js";

connectDB();

const app = express();

app.use(express.json());
app.use(photoRoute);

app.listen(5000, () => console.log("server is up"));
