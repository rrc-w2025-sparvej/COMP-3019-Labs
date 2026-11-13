import { Router } from "express";
import { organizationController } from "../controllers/organizationController.js";

const router = Router();

// Get all organization members
router.get("/", organizationController.getAll);

// Add a new organization member
router.post("/", organizationController.create);

export default router;
