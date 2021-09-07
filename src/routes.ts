import { Router } from "express";
import { CalculateController } from "./controllers/CalculateController"

const router = Router();

const calculateController = new CalculateController();

router.post("/reqUser", calculateController.handle);

export { router }