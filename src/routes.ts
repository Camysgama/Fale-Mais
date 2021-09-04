import { Router } from "express";
import { CalculateController } from "./controllers/CalculateController"

const router = Router();

const calculateController = new CalculateController();

//rota do usuário
router.post("/reqUser", calculateController.handle); //meu handle já esta recebendo o req e res no

export { router }