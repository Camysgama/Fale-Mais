import { Request, Response} from "express";
import { CalculateService } from "../services/CalculateService";

class CalculateController {

    async handle(request: Request, response: Response) {
        //recuperando informação 
        const {origin, destiny, time, plan} = request.body;

        const calculateService = new CalculateService();

        const user = await calculateService.execute({origin, destiny, time, plan});

        //retornando as informações que foram recuperadas
        return response.json(user);
    }

}

export { CalculateController}