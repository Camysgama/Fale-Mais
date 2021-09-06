
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"


 //dados que terão que ser requeridos e executados pela classe  
interface  IUserRequest{
     origin: number;
     destiny: number;
     time: number;
     plan: number
 }

 class CalculateService{ 
     async execute({origin, destiny, time, plan}: IUserRequest) {
         const userRepository = getCustomRepository(UserRepository); //instanciando repositório
        if(!origin || !destiny ||  !time || !plan) {
            throw new Error("Insira corretamente o campo");
        }else if(time <=0){
            throw new Error("Por favor insira o tempo válido!")
        }
        else {
         
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