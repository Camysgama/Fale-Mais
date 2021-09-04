
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"
import { TarifService } from "./TarifService";

 

 interface  IUserRequest{
     origin: number;
     destiny: number;
     time: number;
     plan: number
 }
 //dados que terão que ser requeridos e executados pela classe   
 
 class CalculateService extends TarifService{ 
     async execute({origin, destiny, time, plan}: IUserRequest) {
         const userRepository = getCustomRepository(UserRepository); //instanciando repositório

        if(!origin || !destiny ||  !time || !plan) {
           throw new Error("Insira corretamente o campo");
        }else {

         //const tarif = TarifService.calculate(origin, destiny);

         //criar dados dentro da base de dados
         const passData = userRepository.create({
            origin,
            destiny,
            time,
            plan
        })

        await userRepository.save(passData);

        return passData;
        }

     }

 }


 export { CalculateService }
 //recebe os dados da req e 