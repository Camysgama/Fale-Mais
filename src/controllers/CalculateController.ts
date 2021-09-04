import { Request, Response} from "express";
import { CalculateService } from "../services/CalculateService";
import { PriceService} from "../services/PriceService";
import { TarifService } from "../services/TarifService";

class CalculateController {

    async handle(request: Request, response: Response) {
        //recuperando informação 
        const {origin, destiny, time, plan} = request.body;
        

        const calculateService = new CalculateService();
        const tarifServ = new TarifService();
        const priceServ = new PriceService();

        const user = await calculateService.execute({origin, destiny, time, plan});
        const tarifa = await tarifServ.calculate({origin, destiny})
        const results = await priceServ.resultate({time, plan, tarifa});

        //retornando as informações que foram recuperadas
        return response.json({user, prices: results})

        
    }

}

export { CalculateController}