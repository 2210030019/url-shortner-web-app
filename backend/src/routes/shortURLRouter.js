import { Router } from "express";
import { privateRoute } from "../middlewares/authMiddleware.js";
import { createShortURL, getAndRedirectShortURL } from "../controllers/shortURLController.js";

const shortURLRouter = Router();

// Import your controller functions here

// Define your routes
shortURLRouter.post("/", privateRoute, createShortURL); // Create a new short URL
shortURLRouter.get("/:shortCode", getAndRedirectShortURL); // Get a short URL by its code



export default shortURLRouter;
